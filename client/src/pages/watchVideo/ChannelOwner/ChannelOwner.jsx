import PropsTypes from "prop-types";

import "./Channel.css";
import useWatchVideo from "../useWatchVideo";

export default function ChannelOwner({avatar, displayName, subscribers}) {
    const {Subscribe} = useWatchVideo();
    return (
        <div className="channel">
            <div className="channel__avatar">
                <img
                    src={avatar}
                    alt=""
                />
            </div>
            <div className="channel__info">
                <div className="channel__info__name">{displayName}</div>
                <div className="channel__info__subscribers">{subscribers} subscribers</div>
            </div>
            {Subscribe()}
        </div>
    );
};


ChannelOwner.propTypes = {
    avatar: PropsTypes.string,
    displayName: PropsTypes.string,
    subscribers: PropsTypes.number,
}


ChannelOwner.defaultProps = {
    avatar: "",
    displayName: "",
    subscribers: 0,
}