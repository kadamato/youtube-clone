import React from "react";
import { Link, useAsyncError, useRouteError } from "react-router-dom";

import "../assets/css/PageNotFound.css";
export default function PageNotFound() {
  return (
    <div className="pageNotFound">
      <div className="pageNotFound__top">
        <img src="/images/error-icon.svg" />
        <div>Page not found , please check and try again </div>
      </div>

      <Link to={"/"} className="pageNotFound__link">
        {" "}
        Back Home
      </Link>
    </div>
  );
}
