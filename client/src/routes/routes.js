import React from "react";
import { createBrowserRouter } from "react-router-dom";

// import Home from "../features/Home";
import RootLayout from "../layouts/RootLayout";
import WatchVideoLayout from "../layouts/WatchVideoLayout";
import PageNotFound from "../common/components/PageNotFound";
import HashTag from "../features/HashTag";
import { videoLoader } from "../loaders/videoLoader";
import FindVideoError from "../common/components/FindVideoError";

import Home from "../pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      // home
      {
        path: "",
        element: <Home />,
      },

      // short video
      {
        path: "short",
        element: <div> short video </div>,
      },

      // hashtag

      {
        path: "hashtag/:hashTagName",

        element: <HashTag />,
      },
    ],
  },
  {
    path: "/videos",
    element: <WatchVideoLayout />,
    loader: videoLoader,
    errorElement: <FindVideoError />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);
