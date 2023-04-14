import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  getVideoFollowCategory,
  saveCategory,
  videoFilterSelector,
} from "../state/videoFilterSlice";

// for 2 func interact with component , return all state

export default function useVideoFilter() {
  const dispatch = useDispatch();
  const videoFilterState = useSelector(videoFilterSelector);
  const { selectingCategory } = videoFilterState;

  // save category into selectingCategory  state variable
  const handleCategory = (categoryName) => {
    dispatch(saveCategory(categoryName));
  };

  //
  const handleHighLightCategory = (category) =>
    selectingCategory === category ? "tag--highlight" : "";

  // next call api to get videos and highlight category button
  useEffect(() => {
    dispatch(getVideoFollowCategory(`videos?category=${selectingCategory}`));
  }, [selectingCategory]);

  // return 2 func , state  of feature
  return [
    {
      handleCategory,
      handleHighLightCategory,
    },
    videoFilterState,
  ];
}
