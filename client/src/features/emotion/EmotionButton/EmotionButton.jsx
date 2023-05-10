import "./EmotionButton.css";
import useEmotion from "../useEmotion";
import useVideoState from "../../watchVideo/useVideoState";
import useEmotionState from "../useEmotionState";
import SignInButtonV2 from "../../authentication/SignInButtonV2/SignInButtonV2";

export default function EmotionButton() {
    const {likeVideo, dislikeVideo} = useEmotion();
    const {video: {_id}} = useVideoState();
    const {onLikeButton, onDislikeButton, likes} = useEmotionState();

    console.log(likes);
    return (
        <div className="emotionButton">
            <div className="emotionButton__like" onClick={() => likeVideo(_id)}>
                <div className="emotionButton__like__icon">
                    <img src="/images/like-icon.svg" alt="like icon"/>
                </div>
                <div className="emotionButton__like__likers">{likes}</div>

                <div className={`nofSignIn ${onLikeButton ? "nofSignIn__like--open" : ""}`}>
                    <div className="nofSignIn__title"> Do you want subscribe this channel</div>
                    <div className="nofSignIn__subTitle"> Signin to subscribe channel</div>
                    <SignInButtonV2/>
                </div>
            </div>
            <div className="emotionButton__dislike" onClick={() => dislikeVideo(_id)}>
                <div className="emotionButton__dislike__icon">
                    <img src="/images/dislike-icon.svg" alt="dislike icon"/>
                </div>

                <div className={`nofSignIn ${onDislikeButton ? "nofSignIn__dislike--open" : ""}`}>
                    <div className="nofSignIn__title"> Do you want subscribe this channel</div>
                    <div className="nofSignIn__subTitle"> Signin to subscribe channel</div>
                    <SignInButtonV2/>
                </div>
            </div>
        </div>
    );
};

EmotionButton.propTypes = {
    likers: Number,
}

EmotionButton.defaultProps = {
    likers: 0,
}