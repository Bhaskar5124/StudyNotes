import express from 'express';
import mongoose from 'mongoose';
import { createClient } from 'redis';
import { customRateLimiter } from './rateLimiter.js';

const app = express();
app.use(express.json());

// 1. DATABASE CONNECTIONS
mongoose.connect('mongodb://localhost:27017/redis_lab')
    .then(() => console.log("✅ Connected to MongoDB"))
    .catch(err => console.error("❌ Mongo Connection Error", err));

const redisClient = createClient();
redisClient.on('error', (err) => console.log('❌ Redis Client Error', err));
await redisClient.connect().then(() => console.log("🚀 Connected to Redis"));

// 2. SCHEMA
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});
const User = mongoose.model('User', userSchema);

// --- SEEDER: Create 5000 records to make the DB work a little ---
app.post('/seed', async (req, res) => {
    await User.deleteMany({});
    const users = Array.from({ length: 5000 }).map((_, i) => ({
        name: `User ${i}`,
        email: `user${i}@example.com`,
        age: Math.floor(Math.random() * 50) + 18
    }));
    await User.insertMany(users);
    res.json({ message: "5000 Users Seeded!" });
});

// --- CASE 1: WITHOUT REDIS (Direct MongoDB) ---
app.get('/no-redis/users', async (req, res) => {
    const start = performance.now(); // Start timer

    try {
        const users = await User.find({}); // Fetch from Disk/SSD
        
        const end = performance.now(); // End timer
        res.json({
            timeTaken: `${(end - start).toFixed(2)}ms`,
            source: "MongoDB (Direct)",
            count: users.length,
            data: users.slice(0, 5) // Send only 5 to keep Postman clean
        });
    } catch (err) { res.status(500).send(err.message); }
});

// --- CASE 2: WITH REDIS (Cache Layer) ---
app.get('/with-redis/users', async (req, res) => {
    const start = performance.now();
    const cacheKey = 'all_users';

    try {
        // 1. Try to fetch from Redis RAM
        const cachedUsers = await redisClient.get(cacheKey);

        if (cachedUsers) {
            const end = performance.now();
            return res.json({
                timeTaken: `${(end - start).toFixed(2)}ms`,
                source: "Redis (Cache)",
                count: JSON.parse(cachedUsers).length,
                data: JSON.parse(cachedUsers).slice(0, 5)
            });
        }

        // 2. If not in Redis, go to MongoDB
        const users = await User.find({});

        // 3. Save result in Redis for next time (expires in 60 seconds)
        await redisClient.setEx(cacheKey, 60, JSON.stringify(users));

        const end = performance.now();
        res.json({
            timeTaken: `${(end - start).toFixed(2)}ms`,
            source: "MongoDB (First time fetch)",
            count: users.length,
            data: users.slice(0, 5)
        });
    } catch (err) { res.status(500).send(err.message); }
});



app.put('/users/:id', async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });

        // 🔥 IMPORTANT: Delete the cache because existing data is now different
        await redisClient.del('all_users');
        console.log("🗑️ Cache Cleared: User updated");

        res.json(updatedUser);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


app.post('/login', customRateLimiter, (req, res) => {
    res.json({ message: "Login attempt successful (if credentials correct)" });
});


app.listen(8050, () => console.log("Server running on http://localhost:8050"));



// QUESTION: If we manually change a user's name in MongoDB, what will the Redis route show?"

// Answer: It will show the old name until the 60-second timer (TTL) expires. 
// This is why we must clear the cache (redisClient.del) whenever we update or delete data in MongoDB!
