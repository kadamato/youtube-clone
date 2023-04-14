import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SUBSCRIBED_VIDEO, YoutubeClone } from "../../../lib/apis";

// async action creator subscribe channel
export const subscribeVideo = createAsyncThunk(
  "watchVideo/subscribedVideo",

  async (data, thunkAPI) => {
    try {
      const resp = await YoutubeClone.get(data);
      if (resp.status === 200) return resp.data;
      throw resp;
    } catch (err) {
      throw err;
    }
  }
);

const watchVideoSlice = createSlice({
  name: "watchVideo",
  initialState: {
    video: null,
    loading: true,
    error: null,
    subscribe: null,
    subscribeError: null,
    liked: null,
    typingComment: null,
    showDescriptor: null,
  },

  reducers: {
    onTypingComment: (state, action) => {
      state.typingComment = action.payload;
    },

    onShowDescriptor: (state, action) => {
      state.showDescriptor = !state.showDescriptor;
    },
  },
  extraReducers: {
    /*  subscribe */
    [subscribeVideo.fulfilled]: (state, action) => {
      state.subscribe = action.payload;
    },

    [subscribeVideo.rejected]: (state, action) => {
      state.subscribeError = action.error;
    },
  },
});

export default watchVideoSlice.reducer;

export const watchVideoState = (state) => state.watchVideo;

export const { onTypingComment, onShowDescriptor } = watchVideoSlice.actions;
