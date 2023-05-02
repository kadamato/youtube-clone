import { Router } from "express";
import passport from "passport";
import jwt from "jsonwebtoken";
import config from "../../config/config.js";
import createError from "../../helpers/createError.js";
import Channel from "../models/channel.js";

const router = Router();

router.get("/login/success", (req, res, next) => {
  try {
    if (!req.user) return next(createError(401, "User not authenticated"));

    const { __v, createdAt, updatedAt, googleId, ...others } = req.user._doc;

    res.status(200).json({ msg: "success", user: others });
  } catch (err) {
    next(err);
  }
});

router.get("/logout", (req, res) => {});

// initial authentication flow
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// handle response from google
router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "http://localhost:1369/",
  })
);

export default router;
