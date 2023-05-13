import mongoose from "mongoose";


const commentSchema = mongoose.Schema({
    _videoId: {
        type: String,
        required: true
    },
    displayName: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        required: true
    },
    profileUrl: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true

    }
},
    {
        timestamps : true
    });




const Comment = mongoose.model("comment", commentSchema);
export default Comment;
