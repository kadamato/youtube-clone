import mongoose from "mongoose";



const   dislikeCommentSchema = mongoose.Schema({
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


const DislikeComment = mongoose.model("comment_dislike", dislikeCommentSchema);
export default DislikeComment;
