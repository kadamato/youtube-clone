import React from "react";
import { Route, Routes } from "react-router-dom";

import MainLayout from "../layouts/MainLayout/MainLayout";
import VideoDetailLayout from "../layouts/VideoDetailLayout/VideoDetailLayout";
import WatchVideo from "../pages/watchVideo/WatchVideo";
import Home from "../pages/home/Home";
import useAuth from "../features/authentication/useAuth";
import useChannelFollowing from "../features/channelFollowing/useChannelFollowing";

export default function App() {
  const { loading } = useAuth();
  if (loading) return <div>loading...</div>;
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route path="short" element={<div> short video </div>} />
        <Route path="hashtag/:hashTagName" element={<div> hashtag </div>} />
      </Route>

      <Route element={<VideoDetailLayout />}>
        <Route path="/videos" element={<WatchVideo />} />
      </Route>
    </Routes>
  );
}
