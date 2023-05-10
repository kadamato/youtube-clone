import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {UserRequest} from "../../lib/apis";

export const loginRequest = createAsyncThunk(
    "auth/loginRequest",
    async (data, thunkAPI) => {
        try {
            const resp = await UserRequest("/auth/login/success");
            if (resp.status === 200) return resp.data.user;
            throw resp;
        } catch (err) {
            throw err;
        }
    }
);

export const channelFollowingRequest = createAsyncThunk(
    "auth/channelFollowingRequest",
    async (data, thunkAPI) => {
        try {
            const resp = await UserRequest("/subscribed");
            if (resp.status === 200) return resp.data.channels;
            throw resp;
        } catch (err) {
            throw err;
        }
    }
)

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        loading: true,
        error: null,
        channels: [],
        loadingChannels: true,
        channelsError: null,
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

        [channelFollowingRequest.pending]: (state, action) => {
            state.loadingChannels = true;
        },
        [channelFollowingRequest.fulfilled]: (state, action) => {
            state.channels = action.payload;
            state.loadingChannels = false;
        },
        [channelFollowingRequest.rejected]: (state, action) => {
            state.channelsError = action.error;
            state.loadingChannels = false;
        }
    },


});

export default authSlice.reducer;

export const authSelector = (state) => state.auth;


