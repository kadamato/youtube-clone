import { configureStore } from "@reduxjs/toolkit";

import watchVideoSlice from "../features/WatchVideo/state/watchVideoSlice";


import videoFilterSlice from "../featuress/FilterVideo/slice";

const reducer = {
  videoFilter: videoFilterSlice,
  watchVideo: watchVideoSlice,
};

const store = configureStore({ reducer });

export default store;
