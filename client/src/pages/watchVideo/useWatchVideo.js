import SubscribeButton from "../../features/subscribe/SubscribeButton/SubscribeButton";
import UnSubscribeButton from "../../features/subscribe/UnSubsribeButton/UnSubscribeButton";
import useSubscribeState from "../../features/subscribe/useSubscribeState";
import useVideoState from "../../features/watchVideo/useVideoState";
import EditVideoButton from "./EditVideo/EditVideoButton";


export default function useWatchVideo() {
    const {isSubscribe} = useSubscribeState();
    const {video: {isVideoOwner}} = useVideoState();
    const Subscribe = () => isVideoOwner ? <EditVideoButton/> : !isSubscribe ? <SubscribeButton/> :
        <UnSubscribeButton/>;

    return {
        Subscribe
    }
}