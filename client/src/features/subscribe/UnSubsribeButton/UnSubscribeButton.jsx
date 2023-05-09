import "./UnsubscribeButton.css";
import useUnsubscribe from "../useUnsubscribe";
import useSubscribeState from "../useSubscribeState";
import useVideoState from "../../watchVideo/useVideoState";

export default function UnSubscribeButton() {
    const {showOptionsChannel, unsubscribeChannel} = useUnsubscribe();
    const {show} = useSubscribeState();
    const {video: {_channelId}} = useVideoState();
    return (
        <div className="unsubscribe" onClick={showOptionsChannel}>
            <div className="unsubscribeButton">
                <img src="/images/ring-icon.svg" alt="ring icon" className="unsubscribe__ringIcon"/>
                <div className="unsubscribe__text">Subscribed</div>
                <img src="/images/arrow-right-icon.svg" alt="arrow down" className="unsubscribe__optionIcon"/>
            </div>

            <div className={`unsubscribe__options ${show ? "unsubscribe__options--show" : ""} `}>
                <div>
                    <img src="/images/ringAll-icon.svg" alt="ring icon"
                         className="options__icon--size"/>
                    <div> All</div>
                </div>
                <div>
                    <img src="/images/ring-icon.svg" alt="ring icon"
                         className="options__icon--size"/>
                    <div>For own you</div>
                </div>

                <div>
                    <img src="/images/offRing-icon.svg" alt="ring icon"
                         className="options__icon--size"/>
                    <div> Off notification</div>
                </div>

                <div onClick={() => unsubscribeChannel(_channelId)}>
                    <img src="/images/unsubscribe-icon.svg" alt="ring icon"
                         className="options__icon--size"/>
                    <div> Unsubscribe</div>
                </div>

            </div>
        </div>
    )
}