import PropTypes from "prop-types";

export default function Channel({ avatar, displayname }) {
  return (
    <div className="channelSubscribed">
      <img src={avatar} alt="" className="channelSubscribed__avatar" />

      <div> {displayname}</div>
    </div>
  );
}

Channel.propTypes = {
  avatar: PropTypes.string,
  displayname: PropTypes.string,
};

Channel.defaultProps = {
  avatar: "",
  displayname: "",
};
