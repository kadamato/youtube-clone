import React from "react";
import { Link, useRouteError } from "react-router-dom";

export default function UnAvailableVideo() {
  const error = useRouteError();
  const {
    response: { data },
  } = error;

  return (
    <div className="unavailableVideo">
      <img src="/images/videoError-icon.svg" />
      <div>{data.message}</div>

      <Link to={"/"} className="unavailableVideo__bottom">
        Back Home
      </Link>
    </div>
  );
}
