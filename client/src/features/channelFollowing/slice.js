import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { YoutubeClone } from "../../lib/apis";

export const channelFollowingRequest = createAsyncThunk(
  "auth/loginRequest",
  async (data, thunkAPI) => {
    try {
      const resp = await YoutubeClone.get("/channel", {
        withCredentials: true,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      });
      if (resp.status === 200) return resp.data.channels;
      throw resp;
    } catch (err) {
      throw err;
    }
  }
);

const channelFollowingSlice = createSlice({
  name: "channelFollowing",
  initialState: {
    channels: [],
    loading: true,
    error: null,
  },

  extraReducers: {
    [channelFollowingRequest.pending]: (state, action) => {
      state.loading = true;
    },
    [channelFollowingRequest.fulfilled]: (state, action) => {
      state.loading = false;
      state.channels = [action.payload];
    },
    [channelFollowingRequest.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
  },
});

export default channelFollowingSlice.reducer;

export const channelFollowingSelector = (state) => state.channelFollowing;
