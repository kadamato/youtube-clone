import "./assets/HashTag.css";
import useHashTag from "./hooks/useHashTag";

export default function HashTag() {
  const {
    displayCategories,
    displayVideos,
    displayLoadingVideo,
    displayError,
  } = useHashTag();

  displayError();
  return (
    <div className="hashTag">
      <div className="hashTag__name">#mixi</div>
      <div className="hashTag__viewsAndChannels">
        <div className="hashTag__views">30 N video </div>
        <div>---</div>
        <div className="hashTag__channel">3 N channel </div>
      </div>

      <div className="hashTag__categories">{displayCategories()}</div>
      {displayLoadingVideo()}

      <div className="hashTag__videos">{displayVideos()}</div>
    </div>
  );
}
