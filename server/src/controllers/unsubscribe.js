
import ChannelSubscribed from "../models/channel_subscribed.js";

export default async function unsubscribe(req, res, next) {
    try {
        const channelId = req.user._id;
        const subscribeChannelId = req.body.channelId;

        const unsubscribe = await ChannelSubscribed.findOneAndDelete({_channelId : channelId, channel_subscribed : subscribeChannelId});

        const subscribes = await ChannelSubscribed.find({channel_subscribed: subscribeChannelId});
        const numberSubscribes = subscribes.length;

        res.status(200).json({msg: "success", status: 200 , subscribers : numberSubscribes});
    } catch (err) {
        next(err)
    }

}