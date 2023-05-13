import mongoose from "mongoose";

const dislikeSchema = mongoose.Schema({
    _videoId: {
        type: String,
        required: true
    },
    channelId: {
        type: String,
        required: true
    }
})

const Dislike = mongoose.model("dislike", dislikeSchema);
export default Dislike;