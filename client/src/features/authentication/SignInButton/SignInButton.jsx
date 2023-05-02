import PropTypes from "prop-types";

import React from "react";

import "./SignInButton.css";

export default function SignInButton() {
  const authenticationWithGoogle = () => {
    window.open("http://localhost:9000/auth/google", "_self");
  };

  return (
    <div className="signInButton" onClick={authenticationWithGoogle}>
      <img
        src="/images/user-icon.svg"
        alt="user-icon"
        className="signInButton--color"
      />
      <div className="signInButton--color"> sign in</div>
    </div>
  );
}

SignInButton.propsTypes = {
  authenticationWithGoogle: PropTypes.func,
};

SignInButton.defaultProps = {
  authenticationWithGoogle: () => {},
};
