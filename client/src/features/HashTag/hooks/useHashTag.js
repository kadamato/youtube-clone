import { useEffect, useState } from "react";
import Category from "../../../common/components/Category";
import Video from "../../../common/components/Video";
import VerifyIcon from "../../../common/components/VerifyIcon";
import useVideoFilter from "../../../common/hooks/useVideoFilter";
import ShortVideo from "../../../common/components/ShortVideo";

export default function useHashTag() {
  const [categories, setCategories] = useState(["all", "short"]);

  const [
    { handleCategory, handleHighLightCategory },
    { videos, loading, error, selectingCategory },
  ] = useVideoFilter();
  useEffect(() => {}, []);

  const displayCategories = () => {
    return categories.map((category) => (
      <Category
        key={category}
        categoryName={category}
        handleCategory={handleCategory}
        handleHighLightCategory={handleHighLightCategory(category)}
      />
    ));
  };

  const displayVideos = () =>
    !loading
      ? videos.length > 0
        ? selectingCategory !== "short"
          ? videos.map((video) => {
              const displayVerifyIcon = () =>
                video.verify ? <VerifyIcon /> : "";
              return (
                <Video video={video} displayVerifyIcon={displayVerifyIcon} />
              );
            })
          : videos.map((shortVideo) => <ShortVideo shortVideo={shortVideo} />)
        : "there aren't any video."
      : "";

  const displayLoadingVideo = () => (loading ? <div>loading...</div> : "");

  const displayError = () => (error ? <div> error</div> : "");
  return {
    displayCategories,
    displayVideos,
    displayLoadingVideo,
    displayError,
  };
}
