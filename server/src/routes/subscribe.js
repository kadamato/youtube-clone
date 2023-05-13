import { Router } from "express";

import subscribe from "../controllers/subscribe.js";

const router = Router();

router.post("/", subscribe);

export default router;
