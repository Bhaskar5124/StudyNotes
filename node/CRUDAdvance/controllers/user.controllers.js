
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import { JWT_SECRET } from "../config/keyConfig.js";

// --- REGISTER ---
// export const register = async (req, res) => {
//     try {
//         const { userName, email, password, bio, hobby } = req.body;

//         // 1. Check if user already exists
//         const existingUser = await User.findOne({ email });
//         if (existingUser) return res.status(400).json({ message: "User already exists" });

//         // 2. Hash the password
//         const salt = await bcrypt.genSalt(10);
//         const hashedPassword = await bcrypt.hash(password, salt);

//         // 3. Create and save user
//         const newUser = new User({
//             userName,
//             email,
//             password: hashedPassword,
//             bio,
//             hobby
//         });

//         await newUser.save();
//         res.status(201).json({ message: "User registered successfully" });
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };

// --- LOGIN ---
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // 1. Find user by email
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: "User not found" });

        // 2. Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

        // 3. Generate JWT Token
        const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1h" });

        res.status(200).json({ 
            token, 
            user: { 
                id: user._id, 
                userName: user.userName, 
                image: user.image,
                bio: user.bio,
                hobby: user.hobby,
                email: user.email
            } 
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// --- UPDATE PROFILE ---
export const updateUser = async (req, res) => {
    try {
        const { userName, bio, hobby } = req.body;
        
        // Create an update object with the text data
        let updateData = { userName, bio, hobby };

        // If a new file was uploaded, add the new Cloudinary path to the update object
        if (req.file) {
            updateData.image = req.file.path;
        }

        const updatedUser = await User.findByIdAndUpdate(
            req.user.id, 
            updateData, 
            { new: true, runValidators: true }
        );

        if (!updatedUser) return res.status(404).json({ message: "User not found" });

        // Send back the updated info (so the frontend can update localStorage)
        res.status(200).json({ 
            message: "Profile updated", 
            user: {
                id: updatedUser._id,
                userName: updatedUser.userName,
                image: updatedUser.image,
                bio: updatedUser.bio,
                hobby: updatedUser.hobby
            } 
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export async function allUsers(req,res){
    try{
        const allUsers = await User.find();
        return res.status(200).json(allUsers)
    }catch(err){
        return res.status(500).json({message: err.message})
    }
 
}



// Copying and pasting a new token every time you log in is annoying. Tell your students to:

// Go to the Login request.

// Click the Tests tab.

// Paste this snippet:

// JavaScript
// const response = pm.response.json();
// pm.environment.set("my_token", response.token);
// Now, in the Bearer Token field of other requests, they can just type {{my_token}}. Postman will update it automatically every time they login!


//REGISTER with Image
export const register = async (req, res) => {
    try {
        // 1. Extract text data from req.body
        const { userName, email, password, bio, hobby } = req.body;

        // 2. Check if a file was actually uploaded
        if (!req.file) {
            return res.status(400).json({ message: "Profile picture is required" });
        }

        // 3. Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ message: "User already exists" });

        // 4. Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // 5. Create and save user (Including the image URL from Cloudinary)
        const newUser = new User({
            userName,
            email,
            password: hashedPassword,
            bio,
            hobby,
            // req.file.path contains the URL returned by Cloudinary
            image: req.file.path 
        });

        await newUser.save();
        
        res.status(201).json({ 
            message: "User registered successfully",
            user: {
                userName: newUser.userName,
                email: newUser.email,
                image: newUser.image
            }
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};