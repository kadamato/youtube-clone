import {useEffect, useState} from "react";


import VideoCategory from "../components/VideoCategory/VideoCategory";
import LoadingCategory from "../components/LoadingCategory/LoadingCategory";

import FilterVideo from "../featuress/FilterVideo";
import StandardVideo from "../components/StandardVideo/StandardVideo";

export default function useHome() {
    const [{clickCategory, activeCategory}, filterVideoState] = FilterVideo();
    const {videos, loading, error} = filterVideoState;

    const [categories, setCategories] = useState([
        "all",
        "music",
        "gaming",
        "live stream",
        "hardware",
        "software",
    ]);


    const displayCategories = () => {
        categories.map((category) => {
                return <VideoCategory
                    key={category}
                    name={category}
                    clickCategory={clickCategory}
                    activeCategory={activeCategory}
                />
            }
        );
    };


    const displayVideos = () => {
        const result = videos.length > 0
            ? videos.map((video) => <StandardVideo key={video._id} video={video}/>)
            : "there aren't any videos";
        return result;
    };

    const displayLoadingCategory = () => (loading ? <LoadingCategory/> : "");

    const displayError = () => (error ? <div> error </div> : "");

    return {
        displayCategories,
        displayVideos,
        displayLoadingCategory,
        displayError,
    };
}
