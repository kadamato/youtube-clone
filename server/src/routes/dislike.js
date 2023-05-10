import { Router } from "express";


import dislike from "../controllers/dislike.js";

const router = Router();

router.post("/", dislike);

export default router;
