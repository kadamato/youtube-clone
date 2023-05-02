import { configureStore } from "@reduxjs/toolkit";

import videoFilterSlice from "../features/videoFilter/filterVideo_slice";
import subscribeChannelSlice from "../features/subscribeChannel/subscribe_channel_slice";
import authSlice from "../features/authentication/slice";
import channelFollowingSlice from "../features/channelFollowing/slice";

const reducer = {
  videoFilter: videoFilterSlice,
  subscribeChannel: subscribeChannelSlice,
  auth: authSlice,
  channelFollowing: channelFollowingSlice,
};

const store = configureStore({ reducer });

export default store;
