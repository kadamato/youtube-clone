
import React from "react";
import { Outlet } from "react-router-dom";


import Header from "../../components/Header/Header";

import "./MainLayout.css";
import Menu from "../../components/Menu/Menu";
import UserAuthenticationFeature from "../../featuress/authentication";


export default function MainLayout() {
    const {authenticationWithGoogle } = UserAuthenticationFeature();
  return (
    <>
      <Header authenticationWithGoogle = {authenticationWithGoogle}/>
      <div className="mainLayout">
        <Menu />
        <div className="menu__wall"></div>
        <Outlet />
      </div>
    </>
  );
}
