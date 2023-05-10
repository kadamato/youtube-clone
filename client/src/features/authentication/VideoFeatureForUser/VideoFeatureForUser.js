import MenuItem from "../../../components/Menu/MenuItem/MenuItem";


export default function VideoFeatureForUser() {
    return <>
        <MenuItem name="Your video" iconPath="ownerVideo-icon.svg" path="/ownerVideo"/>
        <MenuItem name="Watch later" iconPath="watchLater-icon.svg" path="/playlist?list=wl"/>
        <MenuItem name="Video liked" iconPath="like-icon.svg" path="/playlist?list=lvl"/>
    </>


}