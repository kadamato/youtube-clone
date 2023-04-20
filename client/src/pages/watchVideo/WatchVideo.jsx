import PlayVideo from "../../components/PlayVideo/PlayVideo";
import "./WatchVideo.css";
export default function WatchVideo() {
    return (
        <div className="watchVideo">
            <div className="watchVideo__container">
                <PlayVideo/>
                <div className="watchVideo__container__title">
                    title
                </div>

                <div className="watchVideo__container">

                </div>

                <div className="watchVideo__container__description">

                </div>
            </div>

            <div className="watchVideo__recommends">

            </div>
        </div>
    )
}