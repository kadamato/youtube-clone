import { Router } from "express";

import unsubscribe from "../controllers/unsubscribe.js";

const router = Router();

router.post("/", unsubscribe);

export default router;
