import "./Description.css";
import PropsTypes from "prop-types";
export default function Description({views, created, description}) {
    return (
        <div className="description">
            <div className="description__top">
                <div className="description__top__views">{views} views</div>
                <div className="description__top__time">{created}</div>
            </div>
            <div className="description__content">{description}</div>
        </div>
    );
};

Description.propTypes = {
    views: PropsTypes.number,
    created: PropsTypes.string,
    description: PropsTypes.string,

}

Description.defaultProps = {
    views: 0,
    created: "",
    description: "",
}