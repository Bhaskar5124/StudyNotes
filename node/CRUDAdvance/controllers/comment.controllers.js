import Comments from "../models/comment.model.js";

// ✅ 1. GET ONLY "MY" COMMENTS
export async function getComment(req, res) {
    try {
        // Filter by the author ID extracted from the JWT
        const myComments = await Comments.find({ author: req.user.id }).sort({ createdAt: -1 });

        // 1. Comments.find({ author: req.user.id })
        // The Filter: This tells MongoDB, "Don't give me every comment in the database. Only give me the ones where the author field matches the ID of the person currently logged in."

        // Why it's secure: We use req.user.id (which comes from the JWT token), not something the user typed in a box. This ensures User A can never accidentally (or intentionally) see User B's private comment list.

        // 2. .sort({ createdAt: -1 })
        // The Order: This organizes the results.

        // -1 means "Descending": It puts the newest comments at the top and the oldest at the bottom.

        // 1 would mean "Ascending": It would show the oldest comments first.

        // Requirement: This only works because you added timestamps: true to your Mongoose schema.
        return res.status(200).json(myComments);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

// ✅ 2. CREATE COMMENT (Already secure)
export async function createComment(req, res) {
    try {
        const { comment } = req.body;
        if (!comment || comment.trim() === "") {
            return res.status(400).json({ message: "Comment cannot be empty" });
        }

        const newComment = await Comments.create({
            comment,
            author: req.user.id 
        });

        const populatedComment = await newComment.populate("author", "userName image");
        
        return res.status(201).json({ message: "New comment Created", comment: populatedComment });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

// ✅ 3. SECURE EDIT (Check Ownership)
export async function editComment(req, res) {
    try {
        const { id } = req.params;
        const { comment } = req.body;

        // Find the comment first
        const existingComment = await Comments.findById(id);
        if (!existingComment) return res.status(404).json({ message: "Comment not found" });

        // SECURITY: Check if the logged-in user is the owner
        if (existingComment.author.toString() !== req.user.id) {
            return res.status(403).json({ message: "You are not authorized to edit this comment" });
        }

        const editedComment = await Comments.findByIdAndUpdate(id, { comment }, { new: true });
        res.status(200).json({ message: "Edited successfully", comment: editedComment });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

// ✅ 4. SECURE DELETE (Check Ownership)
export async function deleteComment(req, res) {
    try {
        const { id } = req.params;

        const existingComment = await Comments.findById(id);
        if (!existingComment) return res.status(404).json({ message: "Comment not found" });

        // SECURITY: Check if the logged-in user is the owner
        if (existingComment.author.toString() !== req.user.id) {
            return res.status(403).json({ message: "You are not authorized to delete this comment" });
        }

        await Comments.findByIdAndDelete(id);
        res.status(200).json({ message: "Deleted successfully" });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}


export async function getAllPublicComments(req, res) {
    try {
        // 1. Fetch ALL comments from the database
        // 2. Populate 'author' to get the name and image of the person who wrote it
        const comments = await Comments.find()
            .populate("author", "userName image") 
            .sort({ createdAt: -1 }); // Newest first

        return res.status(200).json(comments);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}