import {createContext, Dispatch, SetStateAction} from "react";
import RegisterModel from "../../../../data/models/register-model";
import {MethodPaymentType} from "../types/method-payment-type";
import SendPaymentModel from "../../../../data/models/send-payment-model";

interface JoinNowContextModel {
    step             : number;
    setStep          : Dispatch<SetStateAction<1 | 2 | 3 | 4>>;
    formRegister     : RegisterModel;
    setFormRegister  : Dispatch<SetStateAction<RegisterModel>>;
    methodPayment    : MethodPaymentType;
    setMethodPayment : Dispatch<SetStateAction<MethodPaymentType>>;
    sendPayment      : SendPaymentModel;
    setSendPayment   : Dispatch<SetStateAction<SendPaymentModel>>;
}

const JoinNowContext = createContext<JoinNowContextModel>({} as JoinNowContextModel);

export default JoinNowContext;