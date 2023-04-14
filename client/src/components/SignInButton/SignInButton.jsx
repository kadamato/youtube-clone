import React from "react";
import PropTypes from "prop-types";

export const SignInButton = ({ handleSignIn }) => {
  return (
    <div className="signInButton" onClick={handleSignIn}>
      <img
        src="/images/user-icon.svg"
        alt="user-icon"
        className="signInButton--color"
      />
      <div className="signInButton--color"> sign in </div>
    </div>
  );
};

SignInButton.propTypes = {
  handleSignIn: PropTypes.func,
};

SignInButton.defaultProps = {
  handleSignIn: () => {},
};
