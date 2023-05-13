import ChannelSubscribed from "../models/channel_subscribed.js";
import Channel from "../models/./channel.js";
import createError from "../../helpers/createError.js";
import convertToString from "../../helpers/convertToString.js";

export default async function subscribe(req, res, next) {
    try {
        if (!req.user) return next(createError(401, "Channel not authenticated"));

        const channelId = convertToString(req.user._id);
        const subscribeChannelId = req.body.channelId;


        if (channelId === subscribeChannelId) return next(createError(404, "cannot subscribe yourself"))

        const isSubscribed = await ChannelSubscribed.findOne({
            _channelId: channelId,
            channel_subscribed: subscribeChannelId
        });

        if (!isSubscribed) {
            const userInfo = await Channel.findById(subscribeChannelId);

            const {avatar, displayName} = userInfo._doc;
            const newSubscribe = new ChannelSubscribed({
                _channelId: channelId,
                channel_subscribed: subscribeChannelId,
                avatar, displayName,
                url: `http://localhost:1369/channel/${channelId}`
            });
            await newSubscribe.save();

            const subscribes = await ChannelSubscribed.find({channel_subscribed: subscribeChannelId});
            const numberSubscribes = subscribes.length;

            return res.status(200).json({msg: "success", status: 200, subscribers: numberSubscribes});

        }


        return next(createError(404, "channel was subscribed"))

    } catch (err) {
        next(err)
    }

}