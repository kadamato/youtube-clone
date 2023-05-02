import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { YoutubeClone } from "../../lib/apis";

export const loginRequest = createAsyncThunk(
  "auth/loginRequest",
  async (data, thunkAPI) => {
    try {
      const resp = await YoutubeClone.get("/auth/login/success", {
        withCredentials: true,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      });
      if (resp.status === 200) return resp.data.user;
      throw resp;
    } catch (err) {
      throw err;
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    loading: true,
    error: null,
  },
  extraReducers: {
    [loginRequest.pending]: (state, action) => {
      state.loading = true;
    },
    [loginRequest.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.loading = false;
    },
    [loginRequest.rejected]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },
  },
});

export default authSlice.reducer;

export const authSelector = (state) => state.auth;
