import { Router } from "express";
import passport from "passport";

const router = Router();

router.get("/login/success", (req, res) => {
  if (req.user) {
    res.status(200).json(req.user);
  }
});

// initial authentication flow
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// handle response from google
router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "http://localhost:5000/",
  })
);

export default router;
