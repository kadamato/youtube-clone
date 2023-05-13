import {useDispatch} from "react-redux";

import {useEffect} from "react";
import {loginRequest} from "./slice";


export default function useAuthRequest() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loginRequest());
    }, []);

}