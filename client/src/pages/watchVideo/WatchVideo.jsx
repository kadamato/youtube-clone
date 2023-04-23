import PlayVideo from "../../components/PlayVideo/PlayVideo";
import SubscriptionButton from "../../components/SubscriptionButton/SubscriptionButton";

import VerifyIcon from "../../components/VerifyIcon/VerifyIcon";

import "./WatchVideo.css";


const Channel = () => {
    return (<div className="channel">
        <div className="channel__avatar">
            <img src="https://i.pinimg.com/736x/10/21/ae/1021ae33a4210dbf636e3973f966476d.jpg" alt=""/>
        </div>
        <div className="channel__info">
            <div className="channel__info__name">name</div>
            <div className="channel__info__subscribers">subscribers</div>
        </div>
        <SubscriptionButton/>
    </div>)
}

const EmotionButton = () => {
    return (<div className="emotionButton">
        <div className="emotionButton__like">
            <div className="emotionButton__like__icon">
                <img src="/images/like-icon.svg" alt="like icon"/>
            </div>
            <div className="emotionButton__like__likers">10N</div>
        </div>
        <div className="emotionButton__dislike">
            <div className="emotionButton__dislike__icon">
                <img src="/images/dislike-icon.svg" alt="dislike icon"/>
            </div>
        </div>
    </div>)
}


const ShareButton = () => {
    return (<div className="shareButton">
        <div className="shareButton__text">Share</div>
        <div className="shareButton__icon">
            <i className="fas fa-share"></i>
        </div>
    </div>)

}

const OptionButton = () => {
    return (<div className="optionButton">
        <div className="optionButton__icon">
            <i className="fas fa-ellipsis-h"></i>
        </div>
    </div>)
}


const Description = () => {
    return (<div className="description">
        <div className="description__top">
            <div className="description__top__viewers">10N viewers</div>
            <div className="description__top__time">time passed</div>
        </div>
        <div className="description__content">
            display content here ...
        </div>
    </div>)
}

const Statistic = () => {
    return
    (<div className="statistic">
        <div className="statistic__commentators">10N comments</div>
        <div className="statistic__time">time passed</div>
    </div>)
}


const AddComment = () => {
    return (

        <div className="addComment">
            <div className="addComment__avatar">
                <img src="" alt=""/>
            </div>
            <div className="addComment__container">
                <form className="addComment__container__content">
                    <input type="text" placeholder="Add a public comment..."/>
                </form>
                <div className="addComment__container__cancelButton">
                    Cancel
                </div>
                <div className="addComment__container__commentButton">
                    Comment
                </div>
            </div>
        </div>)
}

const Comments = () => {
    return (<div className="comments">
        <Comment/>
    </div>)
}


const Comment = () => {
    return
    (<div className="comment">
        <div className="comment__avatar">
            <img src="" alt=""/>
        </div>
        <div className="comment__content">

            <div className="comment__content__top">
                <div className="comment__content__name">conmeomaunau</div>
                <div className="comment__content__time">just now</div>
            </div>

            <div className="comment__content__text">oh, good idea!</div>
            <div className="comment__interactComment">
                <div className="comment__interactComment__like">
                    <img src="/images/like-icon.svg" alt="like icon"/>
                </div>
                <div className="comment__interactComment__dislike">
                    <img src="/images/dislike-icon.svg" alt="dislike icon"/>
                </div>
                <div className="comment__interactComment__reply">
                    Reply
                </div>
            </div>
            <div className="comment__content__replies">
                <img src="/images/arrow-right-icon.svg" alt="arrow"/>
                10 replies
            </div>
        </div>

    </div>)
}


const VideoRecommended = () => {
    return (<div className="videoRecommended">
        <div className="videoRecommended__thumbnail">
            <img src="" alt=""/>
        </div>
        <div className="videoRecommended__info">
            <div className="videoRecommended__info__title">title</div>
            <div className="videoRecommended__info__channel">
                <div className="videoRecommended__info__channel__text">conmeomaunau</div>
                <VerifyIcon/>
            </div>
            <div className="videoRecommended__info__bottom">
                <div className="videoRecommended__info__bottom__views">10N views</div>
                <div className="videoRecommended__info__bottom__time">time passed</div>
            </div>
        </div>
    </div>)
}
export default function WatchVideo() {
    return (<div className="watchVideo">
        <div className="watchVideo__videoInfo">
            <PlayVideo/>
            <div className="watchVideo__videoInfo__title"> title</div>
            <div className="watchVideo__videoInfo__interactVideo">
                <Channel/>
                <EmotionButton/>
                {/*<ShareButton/>*/}
                {/*<OptionButton/>*/}
            </div>
            {/*<Description/>*/}
            {/*<Statistic/>*/}
            {/*<AddComment/>*/}
            {/*<Comments/>*/}
        </div>

        <div className="watchVideo__recommends">
            <VideoRecommended/>
        </div>
    </div>)
}