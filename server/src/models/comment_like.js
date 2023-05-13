import mongoose from "mongoose";


const LikeCommentSchema = mongoose.Schema({
    _commentId: {
        type: String,
        required: true
    },
    displayName: {
        type: String,
        required: true
    },
    profileUrl: {
        type: String,
        required: true
    }
})


const LikeComment = mongoose.model("comment_like", LikeCommentSchema);
export default LikeComment;
