import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {UserRequest} from "../../lib/apis";

export const likeVideoRequest = createAsyncThunk(
    "emotion/likeVideoRequest",

    async (videoId, {dispatch}) => {
        try {
            dispatch(activeLikeVideo())
            const resp = await UserRequest.post('/like', {videoId});
            if (resp.status === 200) return resp.data.likes;
            throw  resp;
        } catch (err) {
            throw  err;
        }

    }
)


const likeSlice = createSlice({
    name: "like",
    initialState: {
        likes: null,
        loading: true,
        error: null,

        onLikeButton: false,
        activeLike: false,

    },
    reducers: {
        showNofForLikeButton: (state, action) => {
            state.onLikeButton = !state.onLikeButton;
        },

        mergeLikesState: (state, action) => {
            state.likes = action.payload;
        },
        mergeActiveLike: (state, action) => {
            state.activeLike = action.payload;
        },

        activeLikeVideo: (state, action) => {
            state.activeLike = !state.activeLike;
        }
    },
    extraReducers: {
        [likeVideoRequest.pending]: (state, action) => {
            state.loading = true;
        },
        [likeVideoRequest.fulfilled]: (state, action) => {
            state.loading = false;
            state.likes = action.payload;
        },
        [likeVideoRequest.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error;
        },
    }
})


export default likeSlice.reducer;

export const likeSelector = state => state.like;

export const {
    showNofForLikeButton,
    mergeLikesState,
    mergeActiveLike,
    activeLikeVideo
} = likeSlice.actions;