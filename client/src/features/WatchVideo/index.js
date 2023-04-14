import React from "react";

import "./assets/WatchVideo.css";
import { useLoaderData } from "react-router-dom";
import useWatchVideo from "./hooks/useWatchVideo";

export default function WatchVideo() {
  // from url get id video to call api
  const video = useLoaderData();
  const { displayVideo, displayRecommendVideo } = useWatchVideo();

  return (
    <div className="watchVideo">
      {displayVideo(video)}
      {displayRecommendVideo()}
    </div>
  );
}
