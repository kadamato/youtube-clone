import { configureStore } from "@reduxjs/toolkit";

import videoFilterSlice from "../common/state/videoFilterSlice";
import watchVideoSlice from "../features/WatchVideo/state/watchVideoSlice";

const reducer = {
  videoFilter: videoFilterSlice,
  watchVideo: watchVideoSlice,
};

const store = configureStore({ reducer });

export default store;
