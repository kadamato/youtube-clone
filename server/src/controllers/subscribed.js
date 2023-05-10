import createError from "../../helpers/createError.js";
import ChannelSubscribed from "../models/channel_subscribed.js";

export default async function subscribed(req, res, next) {
    try {
        if (!req.user) return next(createError(401, "Channel not authenticated"));

        const channelId = String(req.user._id); // is user authorized

        const channels = await ChannelSubscribed.find({_channelId: channelId});

        res.status(200).json({msg: "success", channels});
    } catch (err) {
        next(err);
    }
}
