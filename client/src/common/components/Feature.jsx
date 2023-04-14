import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "../assets/css/Feature.css";

export default function Feature({ tagName, iconUrl, path }) {
  return (
    <Link to={path} className="item">
      <img src={`/images/${iconUrl}`} alt="" className="item__icon" />
      <div className="item__name"> {tagName} </div>
    </Link>
  );
}

Feature.propTypes = {
  tagName: PropTypes.string,
  iconUrl: PropTypes.string,
  path: PropTypes.string,
};

Feature.defaultProps = {
  tagName: "none",
  iconUrl: "",
  path: "",
};
