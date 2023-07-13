import {createContext, Dispatch, SetStateAction} from "react";
import RegisterModel from "../../../../data/models/register-model";

interface JoinNowContextModel {
    step            : number;
    setStep         : Dispatch<SetStateAction<1 | 2 | 3 | 4>>;
    formRegister    : RegisterModel;
    setFormRegister : Dispatch<SetStateAction<RegisterModel>>;
}
const JoinNowContext = createContext<JoinNowContextModel>({} as JoinNowContextModel);

export default JoinNowContext;