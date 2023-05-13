import {useSelector} from "react-redux";
import {subscribeSelector} from "./slice";


export default  function useSubscribeState () {
    const  subscribeState = useSelector(subscribeSelector)
    return subscribeState
}