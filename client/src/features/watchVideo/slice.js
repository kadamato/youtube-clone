import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {UserRequest} from "../../lib/apis";
import {mergeSubscribersState, mergeSubscribeState} from "../subscribe/slice";
import {mergeActiveLike, mergeLikesState} from "../emotion/likeSlice";
import {mergeActiveDisLike} from "../emotion/dislikeSlice";


export const videoRequest = createAsyncThunk(
    'watchVideo/videoRequest',
    async (videoId, {dispatch}) => {
        try {
            const resp = await UserRequest.get(`watchVideo${videoId}`)
            if (resp.status === 200) {
                const video = resp.data.video;
                dispatch(mergeSubscribeState(video.isSubscribed));
                dispatch(mergeLikesState(video.likers));
                dispatch(mergeSubscribersState(video.subscribers));
                dispatch(mergeActiveLike(video.isLikedVideo));
                dispatch(mergeActiveDisLike(video.isDislikedVideo));
                return video;
            }
            throw  resp;
        } catch (err) {
            throw  err;
        }
    }
)


export const likeVideoRequest = createAsyncThunk(
    'watchVideo/likeVideoRequest',
    async (videoId, thunkAPI) => {
        try {
            const resp = await UserRequest.post('/watchVideo/like');
            if (resp.status === 200) return resp.data;
            throw resp;
        } catch (err) {
            throw  err;
        }
    }
)

export const dislikeRequest = createAsyncThunk(
    'watchVideo/likeVideoRequest',
    async (videoId, thunkAPI) => {
        try {
            const resp = await UserRequest.post('watchVideo/dislike');
            if (resp.status === 200) return resp.data;
            throw resp;
        } catch (err) {
            throw  err;
        }
    }
)

export const commentVideoRequest = createAsyncThunk(
    'watchVideo/likeVideoRequest',
    async (videoId, thunkAPI) => {
        try {
            const resp = await UserRequest.post('/watchVideo/comment');
            if (resp.status === 200) return resp.data;
            throw resp;
        } catch (err) {
            throw  err;
        }
    }
)


export const likeCommentRequest = createAsyncThunk(
    'watchVideo/likeVideoRequest',
    async (videoId, thunkAPI) => {
        try {
            const resp = await UserRequest.post('/watchVideo/comment/like');
            if (resp.status === 200) return resp.data;
            throw resp;
        } catch (err) {
            throw  err;
        }
    }
)

export const dislikeCommentRequest = createAsyncThunk(
    'watchVideo/likeVideoRequest',
    async (videoId, thunkAPI) => {
        try {
            const resp = await UserRequest.post('/watchVideo/comment/dislike');
            if (resp.status === 200) return resp.data;
            throw resp;
        } catch (err) {
            throw  err;
        }
    }
)

export const replyCommentRequest = createAsyncThunk(
    'watchVideo/likeVideoRequest',
    async (videoId, thunkAPI) => {
        try {
            const resp = await UserRequest.post('/watchVideo/comment/reply');
            if (resp.status === 200) return resp.data;
            throw resp;
        } catch (err) {
            throw  err;
        }
    }
)


const videoSlice = createSlice({
    name: 'video',
    initialState: {
        video: {},
        loading: true,
        error: null
    },

    extraReducers: {
        [videoRequest.pending]: (state, action) => {
            state.loading = true;
        },
        [videoRequest.fulfilled]: (state, action) => {
            state.loading = false;
            state.video = action.payload;
            state.error = null;
        },
        [videoRequest.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error;
        }
    }
})


export default videoSlice.reducer;
export const videoSelector = (state) => state.video;

