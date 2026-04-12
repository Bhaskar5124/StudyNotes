import express from 'express';
import mongoose from 'mongoose';

const app = express();
app.use(express.json());

// 1. Connection
mongoose.connect('mongodb://localhost:27017/pagination_masterclass')
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error(err));

// 2. Product Schema
const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    category: String,
    rating: Number,
    uniqueId: { type: Number, unique: true } // Crucial for Keyset tie-breaking
});

// Indexing for performance
productSchema.index({ price: 1, uniqueId: 1 });
productSchema.index({ category: 1, price: 1 });

const Product = mongoose.model('Product', productSchema);

// --- SEEDER ROUTE: Run first to create 100 products ---
app.post('/seed', async (req, res) => {
    try {
        await Product.deleteMany({});
        const categories = ['Electronics', 'Fashion', 'Home', 'Books'];
        const products = [];
        for (let i = 1; i <= 100; i++) {
            products.push({
                name: `Product ${i}`,
                price: Math.floor(Math.random() * 1000) + 10,
                category: categories[Math.floor(Math.random() * categories.length)],
                rating: (Math.random() * 5).toFixed(1),
                uniqueId: i
            });
        }
        await Product.insertMany(products);
        res.json({ message: "100 Products created for the lab!" });
    } catch (err) { res.status(500).json({ error: err.message }); }
});

// --- TYPE 1: Skip-Limit (Offset-based) ---
// Best for: Page numbers (1, 2, 3...)
app.get('/paginate/skip-limit', async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.pageSize) || 5;
    const skipAmount = (page - 1) * pageSize;

    try {
        const total = await Product.countDocuments();
        const products = await Product.find({})
            .sort({ price: 1 }) 
            .skip(skipAmount)
            .limit(pageSize);

        res.json({
            type: "Skip-Limit (Offset)",
            currentPage: page,
            totalPages: Math.ceil(total / pageSize),
            data: products
        });
    } catch (err) { res.status(500).json({ error: err.message }); }
});

// --- TYPE 2: Keyset (Cursor-based) ---
// Best for: Infinite Scroll (Twitter/Instagram)
app.get('/paginate/keyset', async (req, res) => {
    const lastPrice = parseFloat(req.query.lastPrice);
    const lastId = parseInt(req.query.lastId); 
    const pageSize = parseInt(req.query.pageSize) || 5;

    let findQuery = {};
    if (lastPrice && lastId) {
        findQuery = {
            $or: [
                { price: { $gt: lastPrice } },
                { price: lastPrice, uniqueId: { $gt: lastId } }
            ]
        };
    }

    try {
        const products = await Product.find(findQuery)
            .sort({ price: 1, uniqueId: 1 })
            .limit(pageSize);

        res.json({
            type: "Keyset (Cursor)",
            nextCursor: products.length > 0 ? {
                lastPrice: products[products.length - 1].price,
                lastId: products[products.length - 1].uniqueId
            } : null,
            data: products
        });
    } catch (err) { res.status(500).json({ error: err.message }); }
});

// --- TYPE 3: Filter + Keyset (E-commerce Style) ---
// Best for: Large scale filtered searches (Amazon/Flipkart)
app.get('/paginate/filter-keyset', async (req, res) => {
    const { category, minRating, lastPrice, lastId } = req.query;
    const pageSize = parseInt(req.query.pageSize) || 5;

    let baseFilter = {};
    if (category) baseFilter.category = category;
    if (minRating) baseFilter.rating = { $gte: parseFloat(minRating) };

    let keysetFilter = {};
    if (lastPrice && lastId) {
        keysetFilter = {
            $or: [
                { price: { $gt: parseFloat(lastPrice) } },
                { price: parseFloat(lastPrice), uniqueId: { $gt: parseInt(lastId) } }
            ]
        };
    }

    // Combine filters using $and
    const finalQuery = { ...baseFilter, ...keysetFilter };

    try {
        const products = await Product.find(finalQuery)
            .sort({ price: 1, uniqueId: 1 })
            .limit(pageSize);

        res.json({
            type: "Filtered Keyset",
            appliedFilters: { category, minRating },
            nextCursor: products.length > 0 ? {
                lastPrice: products[products.length - 1].price,
                lastId: products[products.length - 1].uniqueId
            } : null,
            data: products
        });
    } catch (err) { res.status(500).json({ error: err.message }); }
});

app.listen(8050, () => console.log("Pagination server running on http://localhost:8050"));