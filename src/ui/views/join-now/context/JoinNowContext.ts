import {createContext, Dispatch, SetStateAction} from "react";
import React from "react/ts5.0";

interface JoinNowContextModel {
    step    : number;
    setStep : Dispatch<SetStateAction<1 | 2 | 3 | 4>>
}
const JoinNowContext = createContext<JoinNowContextModel>({} as JoinNowContextModel);

export default JoinNowContext;