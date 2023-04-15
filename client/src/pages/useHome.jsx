import {useEffect, useState} from "react";


import VideoCategory from "../components/VideoCategory/VideoCategory";
import LoadingCategory from "../components/LoadingCategory/LoadingCategory";
import StandardVideo from "../components/StandardVideo/StandardVideo";

import VideoFilterFeature from "../featuress/FilterVideo";


export default function useHome() {
    const [{clickCategory, activeCategory}, filterVideoState] = VideoFilterFeature();
    const {videos, loading, error} = filterVideoState;

    const [categories, setCategories] = useState(
        ["all", "music", "gaming", "live stream", "hardware", "software"]
    );


    const displayCategories = () => {
        return categories.map((category) =>
            <VideoCategory
                key={category}
                name={category}
                clickCategory={clickCategory}
                activeCategory={activeCategory}
            />
        );
    };



    const displayVideos = () => {
        const result =
            videos.length < 1 ? "there aren't any video" :
                videos.map((video) => <StandardVideo
                    key={video._id}
                    video={video}
                />)
        return result;
    }

    const displayLoadingCategory = () => (loading ? <LoadingCategory/> : "");

    const displayError = () => (error ? <div> error </div> : "");


    return {
        displayCategories,
        displayVideos,
        displayLoadingCategory,
        displayError,
    };
}
