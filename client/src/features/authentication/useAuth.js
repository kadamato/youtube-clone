import { useDispatch, useSelector } from "react-redux";

import { CancelToken } from "axios";

import { useEffect } from "react";
import { authSelector, loginRequest } from "./slice";

export default function useAuth() {
  const dispatch = useDispatch();
  const authState = useSelector(authSelector);

  useEffect(() => {
    dispatch(loginRequest());

    return () => {};
  }, []);

  return authState;
}
