import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";

import {
  videoFilterSelector,
  getVideoByCategory,
  saveCategory,
} from "./filterVideo_slice";

export default function useVideoFilter(params) {
  const dispatch = useDispatch();
  const videoFilterState = useSelector(videoFilterSelector);

  const { selectingCategory } = videoFilterState;

  useEffect(() => {
    dispatch(getVideoByCategory(`${params}=${selectingCategory}`));

    return () => {};
  }, [selectingCategory]);

  const clickCategory = (category) => {
    dispatch(saveCategory(category));
  };

  const activeCategory = (
    category,
    styles = {
      backgroundColor: "black",
      color: "white",
    }
  ) => {
    if (selectingCategory === category) return styles;
  };

  return [
    {
      clickCategory,
      activeCategory,
    },
    videoFilterState,
  ];
}
