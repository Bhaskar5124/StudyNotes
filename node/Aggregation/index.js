import express from 'express';
import mongoose from 'mongoose';

const app = express();
app.use(express.json());

// 1. Connection & Schema
mongoose.connect('mongodb://localhost:27017/agg_lab');

const Product = mongoose.model('Product', new mongoose.Schema({
    name: String,
    category: String,
    price: Number,
    stock: Number,
    tags: [String], // Array for $unwind
    isAvailable: Boolean
}));

// 2. SEEDER: Insert diverse data
app.post('/seed', async (req, res) => {
    await Product.deleteMany({});
    const data = [
        { name: "Pro Laptop", category: "Electronics", price: 1200, stock: 10, tags: ["work", "tech"], isAvailable: true },
        { name: "Phone Case", category: "Electronics", price: 20, stock: 100, tags: ["accessory"], isAvailable: true },
        { name: "Coffee Mug", category: "Home", price: 15, stock: 50, tags: ["kitchen", "gift"], isAvailable: true },
        { name: "Gaming Mouse", category: "Electronics", price: 80, stock: 0, tags: ["gaming", "tech"], isAvailable: false },
        { name: "Desk Lamp", category: "Home", price: 45, stock: 20, tags: ["office", "decor"], isAvailable: true },
        { name: "Old Radio", category: "Electronics", price: 5, stock: 2, tags: ["vintage"], isAvailable: true }
    ];
    await Product.insertMany(data);
    res.json({ message: "Database Seeded!" });
});

// 3. THE MASTER AGGREGATION ROUTE
app.get('/analytics', async (req, res) => {
    try {
        const result = await Product.aggregate([
            // STAGE 1: $match - Only get available items priced above $10
            { $match: { isAvailable: true, price: { $gt: 10 } } },

            // STAGE 2: $unwind - Deconstruct the tags array
            // If a product has 2 tags, it becomes 2 documents here
            { $unwind: "$tags" },

            // STAGE 3: $group - Group by tag name and calculate stats
            {
                $group: {
                    _id: "$tags", 
                    averagePrice: { $avg: "$price" },
                    totalStock: { $sum: "$stock" },
                    productCount: { $sum: 1 }
                }
            },

            // STAGE 4: $project - Reshape the output
            {
                $project: {
                    _id: 0,                   // Hide the default _id
                    tagName: "$_id",          // Rename _id to tagName
                    averagePrice: { $round: ["$averagePrice", 2] }, // Round to 2 decimals
                    isHighVolume: { $gt: ["$totalStock", 40] } // New boolean field
                }
            },

            // STAGE 5: $sort - Sort by average price descending
            { $sort: { averagePrice: -1 } },

            // STAGE 6: $limit - Only show top 5 tags
            { $limit: 5 }
        ]);

        res.json(result);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(8050, () => console.log("Aggregation Lab running on http://localhost:8050"));