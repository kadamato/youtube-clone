import { useDispatch, useSelector } from "react-redux";
import { CancelToken } from "axios";

import { useEffect } from "react";

import { channelFollowingRequest } from "./slice";

export default function useChannelFollowing() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(channelFollowingRequest());

    return () => {};
  }, []);
}
