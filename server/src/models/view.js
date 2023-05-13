import mongoose from "mongoose";


const ViewSchema = mongoose.Schema({
    _videoId: {
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



const View = mongoose.model("view", ViewSchema);
export default  View;