import "./Tools.css";
import PropsTypes from "prop-types";

export default function Tools({numberComments}) {
    return (
        <div className="tools">
            <div className="tools__commentators">{numberComments} comments</div>
            <div className="tools__sort">
                <div className="tools__sort__icon">
                    <img src="/images/sort-icon.svg" alt="sort icon"/>
                </div>
                <div className="tools__sort__text">Sort by</div>
            </div>
        </div>
    );
};

Tools.propTypes = {
    numberComments: PropsTypes.number,
}

Tools.defaultProps = {
    numberComments: 0,
}