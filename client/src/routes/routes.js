import React from "react";
import {createBrowserRouter} from "react-router-dom";


import MainLayout from "../layouts/MainLayout/MainLayout";
import WatchVideoLayout from "../layouts/WatchVideoLayout";
import {videoLoader} from "../loaders/videoLoader";

import Home from "../pages/home/Home";
import UnAvailablePage from "../components/UnAvailablePage/UnavailablePage";
import UnavailableVideo from "../components/UnAvaiableVideo/UnavailableVideo";

import WatchVideo from "../pages/watchVideo/watchVideo";


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

            // {
            //     path: "hashtag/:hashTagName",
            //     element: <HashTag/>,
            // },
        ],
    },
    {
        path: "/videos",
        element: <WatchVideoLayout/>,
        errorElement: <UnavailableVideo/>,
        children :[{
            element: <WatchVideo/>
        }]
    },
    {
        path: "*",
        element: <UnAvailablePage/>,
    },
]);
