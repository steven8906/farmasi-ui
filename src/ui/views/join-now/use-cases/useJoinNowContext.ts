import {useContext} from "react";
import JoinNowContext from "../context/JoinNowContext";

export default function useJoinNowContext() {
    const context = useContext(JoinNowContext);

    return {
        ...context
    }
}