import { Router } from "express";

import subscribed from "../controllers/subscribed.js";

const router = Router();

router.get("/", subscribed);

export default router;
