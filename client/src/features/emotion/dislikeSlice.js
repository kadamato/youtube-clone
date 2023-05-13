import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {UserRequest} from "../../lib/apis";

export const dislikeVideoRequest = createAsyncThunk(
    "emotion/dislikeVideoRequest",

    async (videoId, {dispatch}) => {
        try {
            dispatch(activeDislikeVideo())
            const resp = await UserRequest.post('/dislike', {videoId});
            if (resp.status === 200) return resp.data;
            throw  resp;
        } catch (err) {
            throw  err;
        }

    }
)

const dislikeSlice = createSlice({
    name: "dislike",
    initialState: {
        dislikes: null,
        loading: true,
        error: null,

        activeDislike: false,
        onDislikeButton: false,

    },

    reducers: {
        showNofForDisLikeButton: (state, action) => {
            state.onDislikeButton = !state.onDislikeButton;
        },
        mergeActiveDisLike: (state, action) => {
            state.activeDislike = action.payload;
        },
        activeDislikeVideo: (state, action) => {
            state.activeDislike = !state.activeDislike;
        }
    }
    ,
    extraReducers: {
        [dislikeVideoRequest.pending]: (state, action) => {
            state.loading = true;

        },
        [dislikeVideoRequest.fulfilled]: (state, action) => {
            state.loading = false;
        },
        [dislikeVideoRequest.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error;
        }


    }

});


export default dislikeSlice.reducer;

export const {showNofForDisLikeButton, mergeActiveDisLike, activeDislikeVideo} = dislikeSlice.actions;

export const dislikeSelector = state => state.dislike;