import { Outlet } from "react-router-dom";
import React, { useEffect } from "react";

import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";

import "./MainLayout.css";
import useChannelFollowing from "../../features/channelFollowing/useChannelFollowing";

export default function MainLayout() {
  // useChannelFollowing();
  return (
    <>
      <Header />
      <div className="mainLayout">
        <Menu />
        <div className="menu__wall"></div>
        <Outlet />
      </div>
    </>
  );
}
