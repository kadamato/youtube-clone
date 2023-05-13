import {useSelector} from "react-redux";
import {videoSelector} from "./slice";

export default  function useVideoState () {
        const videoState  = useSelector(videoSelector);
        return videoState;
}