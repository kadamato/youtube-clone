import createError from "../../helpers/createError.js";

export default async function channel(req, res, next) {
  try {
    if (!req.user) return next(createError(401, "User not authenticated"));

    const id = String(req.user._id);

    // const channels = await Channel.findById(id);

    res.status(200).json({ msg: "success" });
  } catch (err) {
    next(err);
  }
}
