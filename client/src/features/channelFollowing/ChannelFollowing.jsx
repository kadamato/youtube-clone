import { useSelector } from "react-redux";

import SignInButton from "../authentication/SignInButton/SignInButton";
import Channel from "./Channel/Channel";

import { channelFollowingSelector } from "./slice";

export default function ChannelFollowing() {
  const { channels, loading } = useSelector(channelFollowingSelector);

  return !loading ? (
    channels.length < 1 ? (
      <SignInButton />
    ) : (
      <Channel />
    )
  ) : (
    <div>...loading</div>
  );
}
