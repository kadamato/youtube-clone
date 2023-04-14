import { createSlice } from "@reduxjs/toolkit";

const getDataForHashTag = async () => {
  try {
    const resp = await YoutubeClone.get("/hashtag");
    if (resp.status === 200) return resp.data;
    throw resp;
  } catch (err) {
    throw err;
  }
};

const hashTagSlice = createSlice({
  name: "hashTag",
  initialState: [],

  extraReducers: {
    [getDataForHashTag.pending]: (state, action) => {


      
    },
  },
});

export default hashTagSlice.reducer;
