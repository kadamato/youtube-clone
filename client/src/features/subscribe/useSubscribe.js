import {useDispatch} from "react-redux";

import {showNotification, subscribeChannelRequest} from "./slice";
import useAuthState from "../authentication/useAuthState";
import useSubscribeState from "./useSubscribeState";

export default  function useSubscribe () {
    const dispatch = useDispatch();
    const   {user} = useAuthState();
    const subscribeChannel = (channelId) =>  !user ?  dispatch(showNotification()) : dispatch(subscribeChannelRequest(channelId))  ;

    return subscribeChannel;
}