import mongoose from "mongoose";

// --- Product Schema ---
const ProductSchema = new mongoose.Schema({
    _id: Number,
    name: String,
    category: String,
    price: Number,
    rating: Number
}, { _id: false, versionKey: false });

// For this specific function to be fast on a real database, 
// you need a Compound Index on { category: 1, rating: 1, price: 1, _id: 1 }. 
// This allows MongoDB to find the filtered, sorted, and paginated results in one single scan!
// productSchema.index({ category: 1, rating: -1, price: 1, _id: 1 });

const Product = mongoose.model('Product', ProductSchema);

export default Product;