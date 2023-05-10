import "./EditVideoButton.css";
import {Link} from "react-router-dom";
import useVideoState from "../../../features/watchVideo/useVideoState";

export default function EditVideoButton() {
    const {video:{_id}} = useVideoState();
    return <Link to={`/channel/${_id}`} className="editVideo"> Edit video</Link>
}