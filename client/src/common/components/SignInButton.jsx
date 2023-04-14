import React from "react";
import "../assets/css/SignInButton.css";

export const SignInButton = () => {
  const signIn = () =>
    window.open("http://localhost:8000/auth/google", "_self");
  return (
    <div className="signIn_btn" onClick={signIn}>
      <img
        src="/images/user-icon.svg"
        alt="user-icon"
        className="signIn_btn_child--same"
      />
      <div className="signIn_btn_child--same"> sign in </div>
    </div>
  );
};
