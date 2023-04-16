import PropTypes from "prop-types";

import React from "react";

import "./VideoCategory.css";

export default function VideoCategory({name, clickCategory, activeCategory}) {
    return (
        <div
            className="videoCategory"
            onClick={clickCategory}
            style={activeCategory}
        >
            {name}
        </div>
    );
}

VideoCategory.propTypes = {
    name: PropTypes.string,
    clickCategory: PropTypes.func,
    activeCategory: PropTypes.object,
};

VideoCategory.defaultProps = {
    name: "none",
    clickCategory: () => {
    },
    activeCategory: {}
};
