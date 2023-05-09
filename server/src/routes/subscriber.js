import { Router } from "express";

import subscriber from "../controllers/subscriber.js";

const router = Router();

router.get("/", subscriber);

export default router;
