import "./SubscriptionButton.css";
import useSubscribe from "../useSubscribe";


import SignInButtonV2 from "../../authentication/SignInButtonV2/SignInButtonV2";
import useSubscribeState from "../useSubscribeState";
import useVideoState from "../../watchVideo/useVideoState";

export default function SubscribeButton() {
    const subscribeChannel = useSubscribe();
    const {notificationSignIn} = useSubscribeState();
    const {video: {_channelId}} = useVideoState();
    return (
        <div className="subscribe" onClick={() => subscribeChannel(_channelId)}>
            <div className="subscribeButton"> Subscribe</div>
            <div className={`subscribe__nof ${notificationSignIn ? "subscribe__nof--show" : ""}`}>
                <div className="subscribeButton__requireLogin__title"> Do you want subscribe this channel</div>
                <div className="subscribeButton__requireLogin__subtitle"> Signin to subscribe channel</div>
                <SignInButtonV2/>
            </div>
        </div>
    )
}