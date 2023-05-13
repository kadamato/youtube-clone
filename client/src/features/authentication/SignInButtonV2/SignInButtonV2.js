import "./SignInButtonV2.css";
import useAuth from "../useAuth";

export default function SignInButtonV2() {
    const  authWithGoogle  =  useAuth();
    return <div className="subButtonv2"  onClick={authWithGoogle}> Sign in</div>

}