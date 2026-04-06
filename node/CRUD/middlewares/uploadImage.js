import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import multer from 'multer';
import dotenv from 'dotenv';

dotenv.config();

// 1. Configure Cloudinary Credentials
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
});

// 2. Setup the Storage Engine
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'user_profiles', // Folder name in your Cloudinary dashboard
        allowed_formats: ['jpg', 'png', 'jpeg', 'webp'], // Security: only images
        transformation: [{ width: 500, height: 500, crop: 'limit' }] // Optimization: resize automatically
    },
});

// 3. Create the Multer Instance
export const upload = multer({ 
    storage: storage,
    limits: { fileSize: 1024 * 1024 * 5 } // Limit: 5MB max
});