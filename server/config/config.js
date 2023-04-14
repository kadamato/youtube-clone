// config server

import dotenv from "dotenv";
dotenv.config({ path: "./config/.env" });

const config = {
  // server run at port
  port: 8000,

  // config db
  db: {
    key: `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.61s3nlo.mongodb.net/youtube-clone`,
  },

  // config google credentials
  googleCredentials: {
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callBackUrl: "/auth/google/callback",
  },
};

export default config;
