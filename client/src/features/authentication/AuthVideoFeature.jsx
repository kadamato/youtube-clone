import useAuthState from "./useAuthState";
import VideoFeatureForUser from "./VideoFeatureForUser/VideoFeatureForUser";


export default function AuthVideoFeature() {
    const {user} = useAuthState();

    return !user ? "" : <VideoFeatureForUser/>
}