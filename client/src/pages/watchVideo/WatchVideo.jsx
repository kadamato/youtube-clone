import PlayVideo from "../../components/PlayVideo/PlayVideo";
import SubscriptionButton from "../../components/SubscriptionButton/SubscriptionButton";
import VerifyIcon from "../../components/VerifyIcon/VerifyIcon";
import VideoCategory from "../../components/VideoCategory/VideoCategory";

import "./WatchVideo.css";

const Channel = () => {
  return (
    <div className="channel">
      <div className="channel__avatar">
        <img
          src="https://i.pinimg.com/736x/10/21/ae/1021ae33a4210dbf636e3973f966476d.jpg"
          alt=""
        />
      </div>
      <div className="channel__info">
        <div className="channel__info__name">name</div>
        <div className="channel__info__subscribers">subscribers</div>
      </div>
      <SubscriptionButton />
    </div>
  );
};

const EmotionButton = () => {
  return (
    <div className="emotionButton">
      <div className="emotionButton__like">
        <div className="emotionButton__like__icon">
          <img src="/images/like-icon.svg" alt="like icon" />
        </div>
        <div className="emotionButton__like__likers">10N</div>
      </div>
      <div className="emotionButton__dislike">
        <div className="emotionButton__dislike__icon">
          <img src="/images/dislike-icon.svg" alt="dislike icon" />
        </div>
      </div>
    </div>
  );
};

const ShareButton = () => {
  return (
    <div className="shareButton">
      <div className="shareButton__icon">
        <img src="/images/share-icon.svg" alt="share icon" />
      </div>
      <div className="shareButton__text">Share</div>
    </div>
  );
};

const OptionButton = () => {
  return (
    <div className="optionButton">
      <div className="optionButton__icon">
        <img src="images/more-icon.svg" alt="more icon" />
      </div>
    </div>
  );
};

const Description = () => {
  return (
    <div className="description">
      <div className="description__top">
        <div className="description__top__viewers">10N viewers</div>
        <div className="description__top__time">time passed</div>
      </div>
      <div className="description__content">display content here ...</div>
    </div>
  );
};

const Tools = () => {
  return (
    <div className="tools">
      <div className="tools__commentators">10N comments</div>
      <div className="tools__sort">
        <div className="tools__sort__icon">
          <img src="/images/sort-icon.svg" alt="sort icon" />
        </div>
        <div className="tools__sort__text">Sort by</div>
      </div>
    </div>
  );
};

const AddComment = () => {
  return (
    <div className="addComment">
      <div className="addComment__avatar">
        <img
          src="https://i.pinimg.com/564x/d4/80/75/d48075a611bf2646f54adfec969d2720.jpg"
          alt=""
        />
      </div>
      <div className="addComment__form">
        <form className="addComment__form__content">
          <input type="text" placeholder="Add a public comment..." />
        </form>

        <div className="addComment__form__buttons">
          <div className="addComment__form__buttons__cancelButton">Cancel</div>
          <div className="addComment__form__buttons__commentButton">
            Comment
          </div>
        </div>
      </div>
    </div>
  );
};

const Comments = () => {
  return (
    <div className="comments">
      <Comment />
      <Comment />
    </div>
  );
};

const Comment = () => {
  return (
    <div className="comment">
      <div className="comment__avatar">
        <img
          src="https://i.pinimg.com/564x/e3/92/f9/e392f99d7d8c19e6f1f5812e2f853a12.jpg"
          alt=""
        />
      </div>
      <div className="comment__content">
        <div className="comment__content__top">
          <div className="comment__content__name">conmeomaunau</div>
          <div className="comment__content__time">just now</div>
        </div>
        <div className="comment__content__text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
          animi aperiam asperiores assumenda eius est maxime, nisi, nulla
          perferendis, praesentium quisquam sed? Odio quam qui reiciendis
          reprehenderit suscipit, voluptate voluptatem. loremLorem ipsum dolor
          sit amet, consectetur adipisicing elit. Autem culpa dignissimos
          dolorem harum
        </div>
        <div className="comment__interactComment">
          <div className="comment__interactComment__like">
            <img src="/images/like-icon.svg" alt="like icon" />
            <div className="comment__interactComment__like__likers"> 10</div>
          </div>
          <div className="comment__interactComment__dislike">
            <img src="/images/dislike-icon.svg" alt="dislike icon" />
          </div>
          <div className="comment__interactComment__reply">Reply</div>
        </div>
        <div className="comment__content__replies">
          <img
            src="/images/arrow-right-icon.svg"
            alt="arrow"
            className="comment__content__replies__icon"
          />
          <div className="comment__content__replies__text">10 replies</div>
        </div>
      </div>
    </div>
  );
};

const VideoRecommended = () => {
  return (
    <div className="videoRecommended">
      <div className="videoRecommended__thumbnail">
        <img
          src="https://i.pinimg.com/564x/9b/8e/5f/9b8e5f613919c8e67770dfce7504352a.jpg"
          alt=""
        />
      </div>
      <div className="videoRecommended__info">
        <div className="videoRecommended__info__title">
          Thuong huyen nhat : hoi tho mat trang
        </div>
        <div className="videoRecommended__info__channel">
          <div className="videoRecommended__info__channel__text">
            conmeomaunau
          </div>
          <VerifyIcon />
        </div>
        <div className="videoRecommended__info__bottom">
          <div className="videoRecommended__info__bottom__views">10N views</div>
          <div className="videoRecommended__info__bottom__time">
            time passed
          </div>
        </div>
      </div>
    </div>
  );
};
export default function WatchVideo() {
  return (
    <div className="watchVideo">
      <div className="watchVideo__videoInfo">
        <PlayVideo />
        <div className="watchVideo__videoInfo__title"> title</div>
        <div className="watchVideo__videoInfo__interactVideo">
          <Channel />
          <EmotionButton />
          <ShareButton />
          <OptionButton />
        </div>
        <Description />
        <Tools />
        <AddComment />
        <Comments />
      </div>

      <div className="watchVideo__recommends">
        <div className="watchVideo__categories">
          <VideoCategory />
        </div>
        <VideoRecommended />
        <VideoRecommended />
        <VideoRecommended />
      </div>
    </div>
  );
}
