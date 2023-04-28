import {configureStore} from "@reduxjs/toolkit";

import videoFilterSlice from "../features/filterVideo/filterVideo_slice";
import subscribeChannelSlice from "../features/SubscribeChannel/subscribe_channel_slice";
import authSlice from "../features/authentication/auth-slice";

const reducer = {
    videoFilter: videoFilterSlice,
    subscribeChannel: subscribeChannelSlice,
    auth :authSlice
};

const store = configureStore({reducer});

export default store;
