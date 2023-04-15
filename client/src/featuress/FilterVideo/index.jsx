import { useDispatch, useSelector } from "react-redux";
import { getVideoByCategory, videoFilterSelector } from "./slice";

export default function VideoFilterFeature() {
  const dispatch = useDispatch();
  const videoFilterState = useSelector(videoFilterSelector);

  const {selectingCategory} = videoFilterState;

  const clickCategory = (category) => {
    dispatch(getVideoByCategory(category));
  };

  const activeCategory = (category) =>
    selectingCategory === category ? "tag--highlight" : "";

  return [
    {
      clickCategory,
      activeCategory,
    },
    videoFilterState,
  ];
}
