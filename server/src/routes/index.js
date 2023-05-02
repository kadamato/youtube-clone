import { Router } from "express";

import videosRoute from "./videos.js";
import loginRoute from "./login.js";
import videoRoute from "./video.js";
import hashtagRoute from "./hashtag.js";
import channel from "./channel.js";

const router = Router();

// route use find a video or many videos
router.use("/videos", videosRoute);

// route use authentication with third party
router.use("/auth", loginRoute);

// route use get video
router.use("/video", videoRoute);

// hashtag
router.use("/hashtag", hashtagRoute);

//channel
router.use("/channel", channel);

export default router;
