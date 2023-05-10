import { Router } from "express";

import videosRoute from "./videos.js";
import loginRoute from "./login.js";
import watchVideo from "./watchVideo.js";
import hashtagRoute from "./hashtag.js";
import channel from "./subscriber.js";
import subscribe from "./subscribe.js";
import unsubscribe from "./unsubscribe.js";
import like from "./like.js";
import dislike from "./dislike.js";

const router = Router();

// route use find a watchVideo or many videos
router.use("/videos", videosRoute);

// route use authentication with third party
router.use("/auth", loginRoute);

// route use get watchVideo
router.use("/watchVideo", watchVideo);

// hashtag
router.use("/hashtag", hashtagRoute);

//subscribed
router.use("/subscribed", channel);

// subscribe
router.use("/subscribe" , subscribe);

// unsubscribe
router.use("/unsubscribe" , unsubscribe)

// like
router.use("/like" , like);

// dislike
router.use("/dislike" , dislike);


export default router;
