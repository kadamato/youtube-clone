import {useSelector} from "react-redux";
import {likeSelector} from "./likeSlice";
import {dislikeSelector} from "./dislikeSlice";


export default function useEmotionState() {
    const {likes, onLikeButton, activeLike} = useSelector(likeSelector);
    const {onDislikeButton, activeDislike} = useSelector(dislikeSelector);

    return {
        likes, onLikeButton, activeLike, onDislikeButton, activeDislike
    }
}