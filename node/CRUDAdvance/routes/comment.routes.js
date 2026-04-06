import { createComment, deleteComment, editComment, getAllPublicComments, getComment } from "../controllers/comment.controllers.js";
import { verifyToken } from "../middlewares/verifyToken.js";


export function commentRoutes(app){
    app.get('/comments', verifyToken,getComment);
    // app.post('/comment', createComment);
    app.post('/comment', verifyToken, createComment);
    app.put('/comments/:id',verifyToken, editComment);
    app.delete('/comments/:id', verifyToken,deleteComment);

    // This route should be public so even logged-out users can see the feed
    app.get('/all-comments', getAllPublicComments);
}