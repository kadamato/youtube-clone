import Video from "../models/video.js";
import Channel from "../models/channel.js";

import videoCreatedAbout from "../../helpers/videoCreated.js";

async function findVideosByCategory(category) {
    // find watchVideo info of every watchVideo and return array contain videos
    return category === "all"
        ? await Video.find({})
        : await Video.find({category});
}

async function addUserInfoForVideo(videos) {
    let newVideos = [];

    for await (const video of videos) {
        const channel = await Channel.findById(video._channelId);
        const { displayName, avatar, verify } = channel;


        const {createdAt, _id, title, videoImgUrl} = video._doc;

        const completeInfo = {
          displayName,
          avatar,
          verify,
          _id,
          title,
          videoImgUrl,
          created: videoCreatedAbout(createdAt),
        };
        newVideos = [...newVideos, completeInfo];
    }

    return newVideos;
}

const videos = async (req, res, next) => {
    const {category} = req.query;
    try {
        const videos = await findVideosByCategory(category);
        const newVideos = await addUserInfoForVideo(videos);

        return res.status(200).json({msg: "success", videos: newVideos});
    } catch (err) {
        next(err);
    }
};

export default videos;
