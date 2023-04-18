import React from "react";
import {createBrowserRouter} from "react-router-dom";


import MainLayout from "../layouts/MainLayout/MainLayout";
import WatchVideoLayout from "../layouts/WatchVideoLayout";
import HashTag from "../features/HashTag";
import {videoLoader} from "../loaders/videoLoader";

import Home from "../pages/Home";
import UnAvailablePage from "../components/UnAvailablePage/UnavailablePage";
import UnavailableVideo from "../components/UnAvaiableVideo/UnavailableVideo";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            // home
            {
                path: "",
                element: <Home/>
            },

            // short video
            {
                path: "short",
                element: <div> short video </div>,
            },

            // hashtag

            {
                path: "hashtag/:hashTagName",
                element: <HashTag/>,
            },
        ],
    },
    {
        path: "/videos",
        element: <WatchVideoLayout/>,
        loader: videoLoader,
        errorElement: <UnavailableVideo/>,
    },
    {
        path: "*",
        element: <UnAvailablePage/>,
    },
]);
