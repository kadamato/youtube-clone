import { useDispatch, useSelector } from "react-redux";
import { getVideoByCategory, videoFilterSelector } from "./slice";

export default function FilterVideo() {
  const dispatch = useDispatch();
  const filterVideoState = useSelector(videoFilterSelector);

  const { selectingCategory } = filterVideoState;

  const clickCategory = (category) => {
    dispatch(getVideoByCategory(category));
  };

  const activeCategory = (category) => {
    selectingCategory === category ? "tag--highlight" : "";
  };

  return [
    {
      clickCategory,
      activeCategory,
    },
    filterVideoState,
  ];
}
