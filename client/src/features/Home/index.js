import React from "react";

import useHome from "./hooks/useHome";
import "./assets/Home.css";

export default function Home() {
  const {
    displayVideos, // display all video
    displayCategories, // display tag for user
    displayLoadingCategory,
    displayError, //  displayError when get data from server
    displayNetworkError,
  } = useHome();

  displayError();

  return (
    <div className="home">
      <div className="home__category">
        <div className="home__category__tags">{displayCategories()}</div>
      </div>
      <div className="wall-row-category"></div>
      <div className="videoList">{displayVideos()}</div>
      {displayLoadingCategory()}
      {displayNetworkError()}
    </div>
  );
}
