import React from "react";
import PropTypes from "prop-types";

import "./VideoCategory.css";

export default function VideoCategory({ name, clickCategory, activeCategory }) {
  return (
    <div
      className={`videoCategory ${activeCategory(name)}`}
      onClick={() => clickCategory(name)}
    >
      {name}
    </div>
  );
}

Category.propTypes = {
  name: PropTypes.string,
  clickCategory: PropTypes.func,
  activeCategory: PropTypes.func,
};

Category.defaultProps = {
  name: "none",
  clickCategory: () => {},
  activeCategory: () => {},
};
