import mongoose from "mongoose";


const subscribedSchema  = mongoose.Schema({
    _channelId: {
        require: true,
        type:String
    },
    channel_subscribed : {
      type: String,
        require: true
    },
    displayName : {
        require: true,
        type: String
    },
    avatar : {
        require: true,
        type: String
    },
    url : {
        require: true,
        type: String
    }
},{
    timestamps : true
})


const ChannelSubscribed = mongoose.model("channel_subscribed", subscribedSchema);

export default ChannelSubscribed;
