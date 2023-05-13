import {useEffect} from "react";
import {channelFollowingRequest} from "./slice";
import {useDispatch} from "react-redux";

export default function useChannelFollowing() {
    const dispatch = useDispatch();

    useEffect(() => {
         dispatch(channelFollowingRequest())
    }, []);
}