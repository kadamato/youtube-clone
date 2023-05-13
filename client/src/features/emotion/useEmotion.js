import {useDispatch} from "react-redux";
import useAuthState from "../authentication/useAuthState";

import {showNofForDisLikeButton , dislikeVideoRequest} from "./dislikeSlice";
import {showNofForLikeButton , likeVideoRequest}  from "./likeSlice";

export default  function useEmotion () {
    const dispatch = useDispatch();
    const {user} = useAuthState();
    const likeVideo = (videoId) => !user ?  dispatch(showNofForLikeButton()) : dispatch(likeVideoRequest(videoId));

    const dislikeVideo = (videoId) =>!user ? dispatch(showNofForDisLikeButton()) : dispatch(dislikeVideoRequest(videoId));

    return {likeVideo, dislikeVideo};
}