import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
    // 1. Grab the token from the Header
    const authHeader = req.header("Authorization");

    // 2. If no header exists, stop them right here
    if (!authHeader) {
        return res.status(401).json({ message: "Access Denied: Log in required" });
    }

    try {
        // 3. Extract the token (Removing the word "Bearer")
        const token = authHeader.split(" ")[1];

        // 4. Verify the token with your Secret Key
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        console.log('verified', verified)
        // 5. Save the user data into the 'req' object for the controller to use
        req.user = verified;

        // 6. Go to the next function (the Controller)
        next();
    } catch (error) {
        res.status(403).json({ message: "Invalid or Expired Token" });
    }
};





// Think of your Controller like a Bank Vault. You don't let just anyone walk up to the vault and start touching the money (your Database).

// 1. Why verifyToken? (The Security Guard)
// Even if a user is "logged in" on their screen, the Server has no memory of that.

// The Risk: Without this, anyone with a tool like Postman could send a request to /user/update and change your profile details.

// The Fix: The middleware checks their "ID Card" (JWT) on every single request to prove they are actually allowed to touch that specific account.

// 2. Why validateUpdate? (The Inspector)
// Users (or hackers) can send "trash" data in the Request Body.

// The Risk: A user might try to send a 10-GB text file as their "Bio" or try to change their role to "Admin" by adding a hidden field in the input.

// The Fix: The middleware inspects the "Package" (req.body) before it reaches the vault. It throws away anything suspicious or oversized so your database stays clean and fast.

// In Short:
// verifyToken asks: "Who are you?" (Authentication)

// validateUpdate asks: "What are you carrying?" (Data Integrity)

// Controller says: "Okay, everything looks good. I'll save this now."