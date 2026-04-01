export const validateUpdate = (req, res, next) => {
    const { userName, bio, hobby } = req.body;
    const updates = Object.keys(req.body);

    // 1. Define what fields ARE allowed to be updated
    const allowedUpdates = ["userName", "bio", "hobby"];
    
    // 2. Check if the user is trying to update something forbidden (like password or email)
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

    if (!isValidOperation) {
        return res.status(400).json({ 
            error: "Invalid updates! You can only update: " + allowedUpdates.join(", ") 
        });
    }

    // 3. Simple length check for bio
    if (bio && bio.length > 160) {
        return res.status(400).json({ error: "Bio must be under 160 characters" });
    }

    // 4. Ensure userName isn't just empty spaces
    if (userName && userName.trim() === "") {
        return res.status(400).json({ error: "Username cannot be empty" });
    }

    next(); // All checks passed, go to the Controller
};