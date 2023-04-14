import React from "react";
import PropTypes from "prop-types";

import "../assets/css/Category.css";

export default function Category({
  categoryName,
  handleHighLightCategory,
  handleCategory,
}) {
  return (
    <div
      className={`tag ${handleHighLightCategory}`}
      onClick={() => handleCategory(categoryName)}
    >
      {categoryName}
    </div>
  );
}

Category.propTypes = {
  categoryName: PropTypes.string,
  handleCategory: PropTypes.func,
  handleOnCategory: PropTypes.func,
};

Category.defaultProps = {
  categoryName: "none",
  handleCategory: () => {},
  handleHighLightCategory: () => {},
};
