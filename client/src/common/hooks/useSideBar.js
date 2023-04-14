import { useState } from "react";

export default function useSideBar() {
  const [items, setItems] = useState({
    home: [
      {
        tagName: "home",
        iconUrl: "home-icon.svg",
        path: "/",
      },
      {
        tagName: "short",
        iconUrl: "shortVideo-icon.svg",
        path: "/short",
      },

      {
        tagName: "subscription",
        iconUrl: "subscription-icon.svg",
        path: "/subscription",
      },
    ],
    videoMode: [
      {
        tagName: "library",
        iconUrl: "library-icon.svg",
      },
      {
        tagName: "history",
        iconUrl: "history-icon.svg",
      },
    ],
    subscribedChannel: [{}],
    explore: [
      {
        title: "explore",
      },
      {
        tagName: "popular",
        iconUrl: "popular-icon.svg",
      },

      { tagName: "music", iconUrl: "music-icon.svg" },

      { tagName: "game", iconUrl: "youtubeGaming-icon.svg" },

      { tagName: "news", iconUrl: "news-icon.svg" },

      { tagName: "sport", iconUrl: "sport-icon.svg" },
    ],
    services: [
      { title: "more from youtube" },
      { tagName: "youtube music", iconUrl: "youtubeMusic-icon.svg" },

      { tagName: "youtube kids", iconUrl: "youtubeKids-icon.svg" },
      { tagName: "youtube tv", iconUrl: "youtubeTv-icon.svg" },
    ],
    support: [
      { tagName: "setting", iconUrl: "setting-icon.svg" },
      { tagName: "report history", iconUrl: "report-icon.svg" },
      { tagName: "help", iconUrl: "help-icon.svg" },
      { tagName: "send feedback", iconUrl: "feedback-icon.svg" },
    ],
  });

  return { items };
}
