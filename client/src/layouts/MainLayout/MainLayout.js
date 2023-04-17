
import React from "react";
import { Outlet } from "react-router-dom";


import Header from "../../components/Header/Header";

import "./MainLayout.css";
import Menu from "../../components/Menu/Menu";
import UserAuthenticationFeature from "../../featuress/Authentication";


export default function MainLayout() {
    const {authenticationWithGoogle } = UserAuthenticationFeature();
  return (
    <>
      <Header authenticationWithGoogle = {authenticationWithGoogle}/>
      <div className="main">
        <Menu />
        <div className="sideBar__wall"></div>
        <Outlet />
      </div>
    </>
  );
}
