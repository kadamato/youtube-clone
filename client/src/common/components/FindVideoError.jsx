import React from "react";
import { Link, useRouteError } from "react-router-dom";

import "../assets/css/CannotFindVideo.css";

export default function FindVideoError() {
  const error = useRouteError();
  const {
    response: { data },
  } = error;

  return (
    <div className="cannotFindVideo">
      <img src="/images/videoError-icon.svg" />
      <div>{data.message}</div>

      <Link to={"/"} className="cannotFindVideo__backHome">
        Back Home
      </Link>
    </div>
  );
}
