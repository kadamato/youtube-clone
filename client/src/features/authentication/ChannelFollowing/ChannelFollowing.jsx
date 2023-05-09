import PropTypes from "prop-types";
import "./ChannelFollowing.css";
import {Link} from "react-router-dom";

export default function ChannelFollowing({avatar, displayName , url}) {
    return (
        <Link to={url}>
            <div className="channelFollowing">
                <img src={avatar} alt="" className="channelFollowing__avatar"/>
                <div className="channelFollowing__displayName"> {displayName}</div>
            </div>
        </Link>

    );
}

ChannelFollowing.propTypes = {
    avatar: PropTypes.string,
    displayName: PropTypes.string,
};

ChannelFollowing.defaultProps = {
    avatar: "",
    displayName: "",
};
