import {configureStore} from "@reduxjs/toolkit";

import videoFilterSlice from "../features/videoFilter/filterVideo_slice";
import authSlice from "../features/authentication/slice";
import videoSlice from "../features/watchVideo/slice";
import subscribeSlice from "../features/subscribe/slice";
import emotionSlice from "../features/emotion/slice";

const reducer = {
    videoFilter: videoFilterSlice,
    auth: authSlice,
    video: videoSlice,
    subscribe: subscribeSlice,
    emotion: emotionSlice
};

const store = configureStore({reducer});
export default store;


