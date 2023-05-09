import createError from "../../helpers/createError.js";

import Subscriber from "../models/subscriber.js";

export default async function subscriber(req, res, next) {
  try {
    if (!req.user) return next(createError(401, "Channel not authenticated"));

    const subscriberId  = String(req.user._id); // is user authorized


    const channels = await Subscriber.find({subscriberId});

    res.status(200).json({ msg: "success"  , channels});
  } catch (err) {
    next(err);
  }
}
