import createError from "../../helpers/createError.js";
import isEmptyObject from "../../helpers/isEmptyObject.js";
import Dislike from "../models/dislike.js";

export default async function dislike(req, res, next) {
    try {
        if (!req.user) return next(createError(401, "user is not authorized "));

        const channelId = req.user._id;
        const videoId = req.body.videoId;


        const isDisliked = await Dislike.findOne({_videoId: videoId, channelId});

        if (!isDisliked) {
            const newDislike = new  Dislike({
                _videoId: videoId,
                channelId
            });

            await  newDislike.save();
            return res.status(200).json({msg: "disliked"})
        }
        const unDislike = await Dislike.findOneAndDelete({_videoId: videoId, channelId});

        return res.status(200).json({msg: "undisliked"})

    } catch (err) {

    }

}