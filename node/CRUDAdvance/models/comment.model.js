import mongoose from 'mongoose';
// const { Schema } = mongoose;

const commentSchema = new mongoose.Schema({
    username: String ,
    comment: {
        type: String,
        required: true,
        // min: 3,
        // max: 10,
        // unique: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', // This must match the name used in mongoose.model('User', ...)
        required: true
    },
},{timestamps: true});


const Comments = mongoose.model('Comments', commentSchema);

export default Comments;