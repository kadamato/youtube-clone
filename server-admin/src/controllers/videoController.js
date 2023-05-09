import mongoose from "mongoose";
import Video from "../models/videoModel";

export const uploadVideo = async (req, res) => {
  // 1.read data body part : data include info about video
  const data = req.body;


  const uploadVideo = new Video(data);

  try {
    // 3. save video in db
    await uploadVideo.save();

    // if success run next command
    res.status(200).json({ msg: "upload video success " });
  } catch (err) {
    // if  failed run catch block
    res.status(500).json({ msg: "error connect db :(" });
    console.log(err);
  }
};
