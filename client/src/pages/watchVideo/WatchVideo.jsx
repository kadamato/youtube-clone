import PlayVideo from "./PlayVideo/PlayVideo";
import Categories from "./Categories/Categories";
import EmotionButton from "../../features/emotion/EmotionButton/EmotionButton";
import ShareButton from "./ShareButton/ShareButton";
import OptionButton from "./OptionButton/OptionButton";
import ChannelOwner from "./ChannelOwner/ChannelOwner";
import Description from "./Description/Description";
import Tools from "./Tools/Tools";
import AddComment from "./AddComment/AddComment";
import Comments from "./Comments/Comments";
import RecommendedVideos from "./RecommendedVideos/RecommendedVideos";

import "./WatchVideo.css";
import useVideoState from "../../features/watchVideo/useVideoState";
import useSubscribeState from "../../features/subscribe/useSubscribeState";

export default function WatchVideo() {
    const {video} = useVideoState();
    const  {subscribers } = useSubscribeState();
    return (
        <div className="watchVideo">
            <div className="watchVideo__videoInfo">
                <PlayVideo/>
                <div className="watchVideo__videoInfo__title"> {video?.title} </div>
                <div className="watchVideo__videoInfo__interactVideo">
                    <ChannelOwner avatar={video.avatar} displayName={video.displayName}
                                  subscribers={subscribers}/>
                    <EmotionButton/>
                    <ShareButton/>
                    <OptionButton/>
                </div>
                <Description views={video.views} description={video.description} created={video.created}/>
                <Tools numberComments={video.numberComments}/>
                <AddComment/>
                <Comments comments={video.comments}/>
            </div>

            <div className="watchVideo__recommends">
                <Categories/>
                <RecommendedVideos/>
            </div>
        </div>
    );
}
