import {useSelector} from "react-redux";


import {authSelector} from "./slice";

export default function useAuthState() {
    const authState = useSelector(authSelector);

    return authState;
}
