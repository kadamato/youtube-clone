import { useState } from "react";

import FilterVideo from "../featuress/FilterVideo";
import VideoCategory from "../components/VideoCategory/VideoCategory";

export default function useHome() {
  const [{ clickCategory, activeCategory }, filterVideoState] = FilterVideo();

  const { data: videos, loading, error } = filterVideoState;

  const [categories, setCategories] = useState([
    "all",
    "music",
    "gaming",
    "live stream",
    "hardware",
    "software",
  ]);

  const displayCategories = () => {
    categories.map((category) => (
      <VideoCategory
        key={category}
        name={category}
        clickCategory={clickCategory}
        activeCategory={activeCategory}
      />
    ));
  };

  const displayVideos = () => {
    videos.length > 0
      ? videos.map((video) => <Video key={video._id} video={video} />)
      : "there aren't any videos";
  };

  const displayLoadingCategory = () => (loading ? <LoadingCategory /> : "");

  const displayError = () => (error ? <div> error </div> : "");

  return {
    displayCategories,
    displayVideos,
    displayLoadingCategory,
    displayError,
  };
}
