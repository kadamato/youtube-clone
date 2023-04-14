import React from "react";
import Category from "../../../common/components/Category";
import "../assets/ListRecommendedVideos.css";

import RecommendedVideo from "./RecommendedVideo";

export default function ListRecommendedVideos() {
  return (
    <div className="recommendedVideos">
      <div className="recommendedVideos__tags">
        <Category categoryName="music" />
      </div>
      <RecommendedVideo />
    </div>
  );
}
