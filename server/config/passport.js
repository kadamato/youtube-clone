// config auth google with passport

import passport from "passport";
import { Strategy } from "passport-google-oauth20";

import config from "./config.js";
import Channel from "../src/models/./channel.js";

const GoogleStrategy = Strategy;

const passportConfig = () => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: config.googleCredentials.clientId,
        clientSecret: config.googleCredentials.clientSecret,
        callbackURL: config.googleCredentials.callBackUrl,
      },

      async (accessToken, refreshToken, profile, done) => {
        const user = await Channel.findOne({ googleId: profile.id });
        if (!user) {
          // build an user record
          const createNewUser = new Channel({
            googleId: profile.id,
            email: profile.emails[0].value,
            avatar: profile.photos[0].value,
            displayName: profile.displayName,
            givenName: profile.name.givenName,
            familyName: profile.name.familyName,
          });

          //save and return user's info
          const recordSaved = await createNewUser.save();

          return done(null, recordSaved);
        }
        done(null, user);
      }
    )
  );

  // this function save user data in session
  passport.serializeUser((user, done) => {
    done(null, user.googleId);
  });

  //this function get user data base on data saved in session
  passport.deserializeUser(async (googleId, done) => {
    const userInfo = await Channel.findOne({ googleId });
    done(null, userInfo);
  });
};

export default passportConfig;
