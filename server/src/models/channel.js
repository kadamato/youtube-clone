import mongoose from "mongoose";

// with auth google after get data return server save all info into db

const channelSchema = new mongoose.Schema(
  {
    googleId: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      required: true,
    },

    givenName: {
      type: String,
      required: true,
    },
    familyName: {
      type: String,
      required: true,
    },
    displayName: {
      type: String,
      required: true,
    },
    verify: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Channel = mongoose.model("channels", channelSchema);

export default Channel;
