import { configureStore } from "@reduxjs/toolkit";



import videoFilterSlice from "../featuress/filterVideo/slice";

const reducer = {
  videoFilter: videoFilterSlice,
};

const store = configureStore({ reducer });

export default store;
