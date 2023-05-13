import {useDispatch} from "react-redux";

import {unsubscribeChannelRequest} from "./slice";

import {showOptions} from "./slice";

export default function useUnsubscribe() {
    const dispatch = useDispatch();
    const unsubscribeChannel = (channelId) => {
        dispatch(unsubscribeChannelRequest(channelId));
    }
    const showOptionsChannel = (e) => {
        return dispatch(showOptions());
    }

    return {unsubscribeChannel, showOptionsChannel};
}