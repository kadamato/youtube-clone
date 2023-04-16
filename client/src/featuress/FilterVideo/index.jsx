import {useDispatch, useSelector} from "react-redux";

import {useEffect} from "react";

import {videoFilterSelector, getVideoByCategory, saveCategory} from "./slice";

export default function VideoFilterByCategoryFeature() {
    const dispatch = useDispatch();
    const videoFilterState = useSelector(videoFilterSelector);

    const {selectingCategory} = videoFilterState;


    useEffect(() => {
        dispatch(getVideoByCategory(selectingCategory));
    }, [selectingCategory]);


    const clickCategory = (category) => {
        const a = dispatch(saveCategory(category));
        console.log(a);
    }


    const activeCategory = (category, styles = {
        backgroundColor: "black",
        color: "white",
    }) => {
        if (selectingCategory === category) return styles
    };

    return [
        {
            clickCategory,
            activeCategory,
        },
        videoFilterState,
    ];
}

