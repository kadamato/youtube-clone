import React from "react";

import Header from "../../components/Header/Header";
import {Navigate, Outlet, useLocation} from "react-router-dom";
import useVideoRequest from "../../features/watchVideo/useVideoRequest";
import useVideoState from "../../features/watchVideo/useVideoState";
import UnavailableVideo from "../../components/UnAvaiableVideo/UnavailableVideo";


export default function VideoDetailLayout() {
    const location = useLocation();
    useVideoRequest(location.search);
    const {loading, error} = useVideoState();

    if (!location.search) return (<Navigate to="/"/>)
    if (loading) return <div>loading...</div>
    if (error) return <UnavailableVideo/>


    return (
        <>
            <Header/>
            <Outlet/>
        </>
    );
}
