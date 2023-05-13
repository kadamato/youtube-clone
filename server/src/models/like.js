import mongoose from "mongoose";


const likeSchema = mongoose.Schema({
    _videoId: {
        type: String,
        required: true
    },
    channelId: {
        type: String,
        required: true
    }
})


const Like = mongoose.model("like", likeSchema);
export default Like;