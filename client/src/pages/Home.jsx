import useHome from "./useHome";

import "./Home.css";
import VideoCategory from "../components/VideoCategory/VideoCategory";


export default function Home() {
    const {
        displayCategories,
        displayVideos,
        displayError,
        displayLoadingCategory
    } = useHome();

    displayError();

    console.log(displayCategories())

    return (
        <div className="home">
            <div className="home__categories">
                {displayCategories()}
            </div>
            <div className="home__rowWall"></div>
            <div className="home__videos">{displayVideos()}</div>
            {displayLoadingCategory()}
        </div>
    );
}
