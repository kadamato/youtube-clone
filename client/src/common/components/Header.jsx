import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/Header.css";

import { SignInButton } from "../components/SignInButton";

export default function Header() {
  return (
    <div>
      <div className="header">
        <div className="header__left">
          <div className="header__left__menu">
            <img
              src="images/menu-icon.svg"
              alt="menu-icon"
              className="header__left__menu-icon"
            />
          </div>
          <Link to="/">
            <img
              src="/images/youtube-logo.png"
              alt="logo-icon"
              className="header__left__logo"
            />
          </Link>
        </div>

        <div className="header__centre">
          <form className="header__centre__search">
            <input type="text" placeholder="Search" />
            <button className="header__center__search-button">
              <img src="/images/search-icon.svg" alt="search-icon" />
            </button>
          </form>
        </div>

        <div className="header__right">
          <div className="header__right__more">
            <img
              src="/images/straight-more-icon.svg"
              alt="straightMore-icon"
              className="header__right__more-icon"
            />
          </div>

          <SignInButton />
        </div>
      </div>
      {/*   use display: fixed so this element use to normal display */}
      <div className="header__wall"></div>
    </div>
  );
}
