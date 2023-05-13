import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {UserRequest} from "../../lib/apis";

export const addCommentRequest = createAsyncThunk(
    "addComment",
    async (data, thunkAPI) => {
        try {
            const resp = await UserRequest.post("/comment", {data});
            if (resp.status === 200) return resp.data;
            throw  resp;
        } catch (error) {
            throw  error;
        }
    }
)

const addCommentSlice = createSlice({
    name: "addComment",
    initialState: {
        comment: null,
        loading: true,
        error: null
    },
    extraReducers: {
        [addCommentRequest.pending]: (state, action) => {
            state.loading = true;
        }
        ,
        [addCommentRequest.fulfilled]: (state, action) => {
            state.loading = false;
            state.comment = action.payload;
        }
        ,
        [addCommentRequest.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error;
        }
    }
});


export default  addCommentSlice.reducer;

export const addCommentSelector =  state => state.addComment;
