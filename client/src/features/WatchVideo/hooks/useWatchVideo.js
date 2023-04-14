import React from "react";
import { useDispatch, useSelector } from "react-redux";

import ListRecommendedVideos from "../components/ListRecommendedVideos";
import VideoPlaying from "../components/VideoPlaying";
import {
  subscribeVideo,
  watchVideoState,
  onTypingComment,
  onShowDescriptor,
} from "../state/watchVideoSlice";

export default function useWatchVideo() {
  const dispatch = useDispatch();

  // state of the  watchVideo
  const { subscribe, typingComment, showDescriptor } =
    useSelector(watchVideoState);

  //  async action creator :subscribe video
  const handleSubscribeVideo = () => {
    dispatch(subscribeVideo("1"));
  };

  // action creator : get data in comment input to enable comment button
  const handleTypingComment = (e) => {
    const currentComment = e.target.value.length > 0;
    dispatch(onTypingComment(currentComment));
  };

  // action creator : show descriptor
  const handleShowDescriptor = () => {
    dispatch(onShowDescriptor());
  };

  const enableShowDescriptor = () =>
    showDescriptor ? "enable__showDescriptor" : "";

  const enableSendComment = () => (typingComment ? "enable__commentBtn" : "");

  const displayVideo = (video) => (
    <VideoPlaying
      video={video}
      handleSubscribeVideo={handleSubscribeVideo}
      handleTypingComment={handleTypingComment}
      handleShowDescriptor={handleShowDescriptor}
      enableSendComment={enableSendComment}
      enableShowDescriptor={enableShowDescriptor}
    />
  );

  const displayRecommendVideo = () => <ListRecommendedVideos />;
  return {
    displayVideo,
    displayRecommendVideo,
  };
}
