import React from "react";
import { Link } from "react-router-dom";

import PropTypes, { object } from "prop-types";

import "../assets/css/Video.css";

export default function Video({ video, displayVerifyIcon }) {
  return (
    <Link to={`videos?id=${video?._id}`} className="video">
      <img src={`${video?.videoImgUrl}`} className="video__videoImg" />

      <div className="video__info">
        <div className="video__info__channelAvt">
          <img src={video?.avatar} />
        </div>

        <div className="video__info__shortInfoOfVideo">
          <div className="video__info__videoTitle">{video?.title}</div>
          <div className="video__info__channel">
            <div className="video__info__channel__name">
              <div className="video__info__channel__name__displayName">
                {video?.displayName}
              </div>

              <div className="video__info__channel__name__subTitle">
                {video?.displayName}
              </div>
            </div>

            {displayVerifyIcon()}
          </div>

          <div className="video__info__view-time">
            <div>1.5k views</div>
            <div>-</div>
            <div>{video?.created}</div>
          </div>
        </div>
      </div>
    </Link>
  );
}

Video.propTypes = {
  video: PropTypes.object,
  displayVerifyIcon: PropTypes.func,
};
Video.defaultProps = {
  video: {},
  displayVerifyIcon: () => {},
};
