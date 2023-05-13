import mongoose from "mongoose";


const ReplyCommentSchema = mongoose.Schema({
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


const ReplyComment = mongoose.model("comment_replies", ReplyCommentSchema);
export default ReplyComment;
