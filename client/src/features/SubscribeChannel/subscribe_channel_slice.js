import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {YoutubeClone} from "../../lib/apis";


export const subscribeChannelRequest = createAsyncThunk(
    'subscribeChannel/subscribeChannelRequest',
    async (data, thunkAPI) => {
        try {
            const resp = await YoutubeClone.post("/subscribe", data);
            if (resp.status === 200) return resp.data;
            throw resp;
        } catch (err) {
            throw err;
        }
    });


export const Subscribe_channel_slice = createSlice({
    name: 'subscribeChannel',
    initialState: {
        subscribeChannel: false,
        loading: false,
        error: null
    },

    extraReducers: {
        [subscribeChannelRequest.pending]: (state, action) => {
            state.loading = true;
        }
        ,
        [subscribeChannelRequest.fulfilled]: (state, action) => {
            state.subscribeChannel = action.payload;
            state.loading = false;
        }
        ,
        [subscribeChannelRequest.rejected]: (state, action) => {
            state.error = action.error;
            state.loading = false;
        }
    }
})


export default Subscribe_channel_slice.reducer;
export const subscribeChannelSelector = state => state.subscribeChannel;