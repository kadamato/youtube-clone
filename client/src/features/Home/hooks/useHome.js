import React, { useState } from "react";

import Video from "../../../common/components/Video";
import Category from "../../../common/components/Category";
import VerifyIcon from "../../../common/components/VerifyIcon";
import LoadingCategory from "../../../common/components/LoadingCategory";
import useVideoFilter from "../../../common/hooks/useVideoFilter";

export default function useDisplayVideoFollowTag() {
  const [
    { handleHighLightCategory, handleCategory },
    { loading, videos, error },
  ] = useVideoFilter();

  // tags recommend for user
  const [categories, setCategories] = useState([
    "all",
    "music",
    "gaming",
    "live stream",
    "hardware",
    "software",
  ]);

  // display all videos
  const displayVideos = () =>
    videos.length > 0
      ? videos.map((video) => {
          const displayVerifyIcon = () => (video.verify ? <VerifyIcon /> : "");
          return (
            <Video
              video={video}
              displayVerifyIcon={displayVerifyIcon}
              key={video._id}
            />
          );
        })
      : "there aren't any videos";

  // display tag recommend for user
  const displayCategories = () =>
    categories.map((category) => (
      <Category
        key={category}
        categoryName={category}
        handleHighLightCategory={handleHighLightCategory(category)}
        handleCategory={handleCategory}
      />
    ));

  // display loading when user click on tag
  const displayLoadingCategory = () => (loading ? <LoadingCategory /> : "");

  // display error
  const displayError = () => (error ? <div> error </div> : "");

  const displayNetworkError = () => {
    const errorMessage =
      error?.code === "ERR_NETWORK" ? (
        <div className="nof_networkError"> you are offline </div>
      ) : (
        ""
      );

    return errorMessage;
  };

  return {
    displayVideos,
    displayCategories,
    displayError,
    displayLoadingCategory,
    displayNetworkError,
  };
}
