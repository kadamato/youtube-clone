import PropTypes from "prop-types";

import React from "react";
import {Link} from "react-router-dom";

import VerifyIcon from "../VerifyIcon/VerifyIcon";

import "./StandardVideo.css";

export default function StandardVideo({video}) {
  return (
      <Link to={`videos?id=${video?._id}`} className="video">
        <img src={`${video?.videoImgUrl}`} className="video__videoImg"/>

        <div className="video__info">
          <div className="video__info__channelAvt">
            <img src={video?.avatar}/>
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
              {video.verify && <VerifyIcon/>}
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

StandardVideo.propTypes = {
  video: PropTypes.object,
  displayVerifyIcon: PropTypes.func,
};
StandardVideo.defaultProps = {
  video: {},
  displayVerifyIcon: () => {
  },
};
