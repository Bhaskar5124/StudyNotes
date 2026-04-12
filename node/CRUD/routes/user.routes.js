import { register, login, updateUser, allUsers, logout, cookieLogin } from "../controllers/user.controllers.js";
import { verifyToken } from "../middlewares/verifyToken.js";
import { validateUpdate } from "../middlewares/validateUpdate.js";
import { upload } from "../middlewares/uploadImage.js";
import { verifyTokenCookie } from "../middlewares/verfifyTokenCookie.js";

export function userRoutes(app) {
    // Public routes
    app.post('/register', upload.single('avatar'), register);
    // app.post('/register', register);
    app.post('/login', login);

// Protected & Validated route
    // 1. verifyToken: Checks IF the user is logged in
    // 2. validateUpdate: Checks IF the data (bio, hobby) is correct
    // 3. updateUser: Finally saves to MongoDB
    
    app.put('/user/update', verifyToken, validateUpdate, updateUser);

    app.get('/allUsers', allUsers);


    //Using Cookies
    app.post('/cookieLogin', cookieLogin);
    app.put('/user/cookieUpdate', verifyTokenCookie, updateUser);
    app.post('/logout', logout);
}