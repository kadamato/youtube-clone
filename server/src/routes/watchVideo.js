import { Router } from "express";

import { watchVideo } from "../controllers/watchVideo.js";
import {likeVideo} from "../controllers/watchVideo.js";

const router = Router();

router.use("/", watchVideo);


router.use("/like", likeVideo);
export default router;
