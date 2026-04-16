import { createClient } from 'redis';

// Connect to your existing Redis client
const redisClient = createClient();
await redisClient.connect();

export const customRateLimiter = async (req, res, next) => {
    // 1. Identify the user by IP address
    const ip = req.ip || req.headers['x-forwarded-for'];
    const key = `rate_limit:${ip}`;
    
    const limit = 5;      // Max 5 requests
    const windowSize = 60; // In 60 seconds

    try {
        // 2. Increment the count for this IP
        const requests = await redisClient.incr(key);

        // 3. If it's the very first request, set the expiration
        if (requests === 1) {
            await redisClient.expire(key, windowSize);
        }

        // 4. Check if they crossed the limit
        if (requests > limit) {
            const ttl = await redisClient.ttl(key); // Check how much time left
            return res.status(429).json({
                message: "Too many requests!",
                retryAfter: `${ttl} seconds`
            });
        }

        // 5. If under limit, move to the next function
        next();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};