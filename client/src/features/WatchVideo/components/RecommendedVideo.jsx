import React from "react";

import "../assets/RecommendedVideo.css";

export default function RecommendedVideo() {
  return (
    <div className="recommendedVideo">
      <img
        src="/images/girl.png"
        alt=""
        className="recommendedVideo__videoAvt"
      />
      <div className="recommendedVideo__info">
        <div className="recommendedVideo__info__title">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam minima
        </div>
        <div className="recommendedVideo__info__ownerChannel recommendedVideo--color">
          conmeomaunau
        </div>
        <div className="recommendedVideo__info__viewsAndTime recommendedVideo--color">
          <div className="recommendedVideo__info__viewsAndTime__views">
            888 N views
          </div>
          <div className="recommendedVideo__info__viewsAndTime__time">
            6 hours ago
          </div>
        </div>
      </div>
    </div>
  );
}
