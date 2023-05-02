import React from "react";

import Header from "../../components/Header/Header";
import { Outlet } from "react-router-dom";
import useChannelFollowing from "../../features/channelFollowing/useChannelFollowing";

export default function VideoDetailLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
