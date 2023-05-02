import { useSelector } from "react-redux";

import SettingButton from "./SettingButton/SettingButton";
import SignInButton from "./SignInButton/SignInButton";
import { authSelector } from "./slice";

export default function Authentication() {
  const { user, loading } = useSelector(authSelector);

  return !user ? <SignInButton /> : <SettingButton avatar={user.avatar} />;
}
