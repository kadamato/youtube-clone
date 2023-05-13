import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {UserRequest} from "../../lib/apis";

export const subscribeChannelRequest = createAsyncThunk(
    'subscribe/subscribeChannelRequest',
    async (channelId, {dispatch}) => {
        try {
            dispatch(subscribeChannel());
            const resp = await UserRequest.post('/subscribe', {channelId});
            if (resp.status === 200) return resp.data.subscribers;
            throw resp;
        } catch (err) {
            throw  err;
        }
    }
)

export const unsubscribeChannelRequest = createAsyncThunk(
    'unsubscribe/subscribeChannelRequest',
    async (channelId, {dispatch}) => {
        try {
            await dispatch(unsubscribeChannel())
            const resp = await UserRequest.post('/unsubscribe', {channelId});
            if (resp.status === 200) return resp.data.subscribers;
            throw resp;
        } catch (err) {
            throw  err;
        }
    }
)

const subscribeSlice = createSlice({
    name: 'subscribe',
    initialState: {
        isSubscribe: false,
        subscribers: 0,
        loading: true,
        error: null,
        show: false,
        notificationSignIn: false
    },

    reducers: {
        showOptions: (state, action) => {
            state.show = !state.show;
        },

        showNotification: (state, action) => {
            state.notificationSignIn = !state.notificationSignIn;
        },

        mergeSubscribeState: (state, action) => {
            state.isSubscribe = action.payload;
        },

        mergeSubscribersState: (state, action) => {
            state.subscribers = action.payload;
        },

        subscribeChannel: (state, action) => {
            state.isSubscribe = !state.isSubscribe;
        },

        unsubscribeChannel: (state, action) => {
            state.isSubscribe = !state.isSubscribe
        }

    },
    extraReducers: {
        [subscribeChannelRequest.pending]: (state, action) => {
            state.loading = true;
        },
        [subscribeChannelRequest.fulfilled]: (state, action) => {
            state.loading = false;
            state.subscribers = action.payload;
        },
        [subscribeChannelRequest.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error;
        },


        [unsubscribeChannelRequest.pending]: (state, action) => {
            state.loading = true;
        },
        [unsubscribeChannelRequest.fulfilled]: (state, action) => {
            state.loading = false;
            state.subscribers = action.payload;
        },
        [unsubscribeChannelRequest.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error;
        }
    }
});


export default subscribeSlice.reducer;


export const {
    showOptions,
    showNotification,
    mergeSubscribeState,
    mergeSubscribersState,
    subscribeChannel,
    unsubscribeChannel
} = subscribeSlice.actions;

export const subscribeSelector = state => state.subscribe;