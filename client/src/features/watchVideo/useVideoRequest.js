import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {videoRequest} from "./slice";

export default function useVideoRequest(videoId) {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(videoRequest(videoId));
    }, []);
}