import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    commentVideoRequest, dislikeCommentRequest,
    dislikeRequest,
    likeCommentRequest,
    likeVideoRequest, replyCommentRequest,
    videoRequest, videoSelector
} from "./slice";

export default function useVideo(videoId) {
    const dispatch = useDispatch();

    const likeVideo = ()  =>  dispatch(likeVideoRequest());
    const dislikeVideo = () => dispatch(dislikeRequest());
    const commentVideo = () => dispatch(commentVideoRequest());


    const likeComment = () =>  dispatch(likeCommentRequest());

    const dislikeComment = () =>  dispatch(dislikeCommentRequest());

    const replyComment = () => dispatch(replyCommentRequest());

}