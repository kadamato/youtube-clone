import Channel from "../models/./channel.js";
import Video from "../models/video.js";
import Like from "../models/like.js";
import LikeComment from "../models/comment_like.js";
import ReplyComment from "../models/comment_reply.js";
import Comment from "../models/comment.js";
import View from "../models/view.js";
import ChannelSubscribed from "../models/channel_subscribed.js";

import createError from "../../helpers/createError.js";

import videoCreatedAbout from "../../helpers/videoCreated.js";
import convertToString from "../../helpers/convertToString.js";

export const watchVideo = async (req, res, next) => {
    try {


        const videoId = req.query.id;

        const video = await Video.findById(videoId);

        if (!video) return next(createError(404, "Video not found"));

        const {__v, updatedAt, createdAt, ...others} = video._doc;

        const channel = await Channel.findById(video._channelId);
        const {avatar, displayName, verify} = channel._doc;

        const likers = await Like.find({_videoId: video._id});
        const numberLikers = likers.length;

        const subscribers = await ChannelSubscribed.find({channel_subscribed : channel._id});
        const numberSubscribers = subscribers.length;


        const comments = await Comment.find({_videoId: video._id});

        const likesOfComment = await LikeComment.find({_commentId: comments._id});

        const repliesOfComment = await ReplyComment.find({_commentId: comments._id});

        const views = await View.find({_videoId: video._id});
        const numberViews = views.length;


        let isSubscribed = false;
        let isVideoOwner = false;

        if (req.user) {
            const channelId =  req.user._id;
            isSubscribed = await ChannelSubscribed.findOne({_channelId:channelId , channel_subscribed : channel._id }) ? true : false;
            isVideoOwner = convertToString(channelId) === convertToString(channel._id);
        }


        const completeInfo =
            {
                ...others,
                created: videoCreatedAbout(createdAt),
                avatar,
                displayName,
                verify,
                likers: numberLikers,
                subscribers: numberSubscribers,
                comments,
                views: numberViews,
                isSubscribed,
                isVideoOwner
            }

        return res.status(200).json({video: completeInfo});
    } catch (err) {
        next(err);
    }
};


export const likeVideo = async (req, res, next) => {


}