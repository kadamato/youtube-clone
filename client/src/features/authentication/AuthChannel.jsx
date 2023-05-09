import React from "react";
import {useSelector} from "react-redux";
import {authSelector} from "./slice";
import SignInButton from "./SignInButton/SignInButton";
import ChannelFollowing from "./ChannelFollowing/ChannelFollowing";
import "./auth.css";
import useAuthState from "./useAuthState";
export default function AuthChannel() {
    const {loadingChannels, channels} = useSelector(authSelector);
    const {user} =  useAuthState();


    const signInButton = <div className="menu_signIn">
        <div className="menu_signIn__text">Sign in to like videos, comment, and subscribe.</div>
        <SignInButton/>
    </div>;

    const channelsFollowing =
        <div className="menu__subChannel">
            <div className="menu__subChannel__name">Subscribe Channel</div>
            {(channels.map((channel) => (
                <ChannelFollowing
                    key={channel.id}
                    avatar={channel.avatar}
                    displayName={channel.displayName}
                />)))}
        </div>


    if(!user) return signInButton;

    return !loadingChannels
        ? channels.length < 1
            ? <div> No any channel subscribed  </div>
            : channelsFollowing
        : <div>...loading</div>
}
