import {createContext, Dispatch, SetStateAction} from "react";

interface JoinNowContextModel {
    step    : number;
    setStep : Dispatch<SetStateAction<1 | 2 | 3 | 4>>
}
const JoinNowContext = createContext<JoinNowContextModel>({} as JoinNowContextModel);

export default JoinNowContext;