import React from "react";
import {Route, Routes} from "react-router-dom";

import MainLayout from "../layouts/MainLayout/MainLayout";
import VideoDetailLayout from "../layouts/VideoDetailLayout/VideoDetailLayout";
import WatchVideo from "../pages/watchVideo/WatchVideo";
import Home from "../pages/home/Home";

import useAuthState from "../features/authentication/useAuthState";
import useAuthRequest from "../features/authentication/useAuthRequest";

export default function App() {
    useAuthRequest();
    const {loading} = useAuthState();
    if (loading) return <div> loading...</div>
    return (
        <Routes>
            <Route path="/" element={<MainLayout/>}>
                <Route path="" element={<Home/>}/>
                <Route path="short" element={<div> short video </div>}/>
                <Route path="hashtag/:hashTagName" element={<div> hashtag </div>}/>
                <Route path="playlist"  element={<div> playlist display here  </div>}/>
            </Route>
            <Route path="/videos" element={<VideoDetailLayout/>}>
                <Route path="" element={<WatchVideo/>}/>
            </Route>

        </Routes>
    );
}
