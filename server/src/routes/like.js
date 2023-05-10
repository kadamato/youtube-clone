import { Router } from "express";

import like from "../controllers/like.js";

const router = Router();

router.post("/", like);

export default router;
