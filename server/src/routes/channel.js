import { Router } from "express";

import channel from "../controllers/channel.js";

const router = Router();

router.get("/", channel);

export default router;
