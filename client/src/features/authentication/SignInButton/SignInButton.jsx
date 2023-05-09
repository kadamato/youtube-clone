import PropTypes from "prop-types";

import React from "react";

import "./SignInButton.css";

import useAuth from "../useAuth";

export default function SignInButton() {

    const authWithGoogle = useAuth();

    return (
        <div className="signInButton"  onClick={authWithGoogle}>
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
    authenticationWithGoogle: () => {
    },
};
