import createError from "../../helpers/createError.js";
import convertToString from "../../helpers/convertToString.js";
import Like from "../models/like.js";
import objectLength from "../../helpers/objectLength.js";

export default async function like(req, res, next) {
    try {
        if (!req.user) return next(createError(401, "user is not authorized"));

        const channelId = convertToString(req.user._id);
        const videoId = req.body.videoId;

        const isLikedVideo = await Like.findOne({_videoId: videoId, channelId});

        let numberLikes;

        if (!isLikedVideo) {
            const newLiker =  new  Like({
                _videoId: videoId,
                channelId,
            });

            await newLiker.save();

            const likes = await Like.find({_videoId: videoId});
            numberLikes = likes.length;

            return res.status(200).json({msg: "success", status: 200, likes: numberLikes});
        }

        const cancelLike = await Like.findOneAndDelete({_videoId: videoId, channelId});

        const likes = await Like.find({_videoId: videoId});
        numberLikes =  likes.length;

        res.status(200).json({msg: 'cancel like success ', status: 200 , likes:numberLikes})

    } catch (error) {

    }


}