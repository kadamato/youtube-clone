import { useDispatch, useSelector } from "react-redux";

import {
  subscribeChannelRequest,
  subscribeChannelSelector,
} from "./subscribe_channel_slice";

export default function useSubscribe() {
  const dispatch = useDispatch();

  const subscribeChannelState = useSelector(subscribeChannelSelector);
  const subscribeChannel = (channelId) => {
    dispatch(subscribeChannelRequest(channelId));
  };

  return [subscribeChannel, subscribeChannelState];
}
