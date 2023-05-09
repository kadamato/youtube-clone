import React from "react";
import { Link, useRouteError } from "react-router-dom";

import "./UnavailableVideo.css";

export default function UnavailableVideo() {
  return (
    <div className="unavailableVideo">
      <img src="/images/videoError-icon.svg" />
      <div>error </div>

      <Link to={"/"} className="unavailableVideo__bottom">
        Back Home
      </Link>
    </div>
  );
}
