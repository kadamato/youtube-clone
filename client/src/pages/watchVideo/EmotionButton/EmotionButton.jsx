import "./EmotionButton.css";
import useEmotion from "../../../features/emotion/useEmotion";
import useVideoState from "../../../features/watchVideo/useVideoState";

export default function EmotionButton({likers}) {
    const {likeVideo, dislikeVideo} = useEmotion();
    const {video:{_id}} =  useVideoState();
    return (
        <div className="emotionButton">
            <div className="emotionButton__like" onClick={() => likeVideo(_id)}>
                <div className="emotionButton__like__icon">
                    <img src="/images/like-icon.svg" alt="like icon"/>
                </div>
                <div className="emotionButton__like__likers">{likers}</div>
            </div>
            <div className="emotionButton__dislike" onClick={() => dislikeVideo(_id)}>
                <div className="emotionButton__dislike__icon">
                    <img src="/images/dislike-icon.svg" alt="dislike icon"/>
                </div>
            </div>
        </div>
    );
};

EmotionButton.propTypes = {
    likers : Number,
}

EmotionButton.defaultProps = {
    likers : 0,
}