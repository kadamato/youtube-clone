import {configureStore} from "@reduxjs/toolkit";

import videoFilterSlice from "../features/videoFilter/filterVideo_slice";
import authSlice from "../features/authentication/slice";
import videoSlice from "../features/watchVideo/slice";
import subscribeSlice from "../features/subscribe/slice";
import likeSlice from "../features/emotion/likeSlice";
import dislikeSlice from "../features/emotion/dislikeSlice";
import addCommentSlice from "../features/addComment/slice";

const reducer = {
    videoFilter: videoFilterSlice,
    auth: authSlice,
    video: videoSlice,
    subscribe: subscribeSlice,
    like: likeSlice,
    dislike: dislikeSlice,
    addComment : addCommentSlice
};

const store = configureStore({reducer});
export default store;


