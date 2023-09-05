import {useState} from "react";
import RegisterModel from "../../../../data/models/register-model";
import {MethodPaymentType} from "../types/method-payment-type";
import SendPaymentModel from "../../../../data/models/send-payment-model";
import CreditModel from "../../../../data/models/credit-model";

export default function useJoinNow() {
    const [step, setStep]                   = useState<1 | 2 | 3 | 4>(1);
    const [formRegister, setFormRegister]   = useState<RegisterModel>({} as RegisterModel);
    const [methodPayment, setMethodPayment] = useState<MethodPaymentType>(undefined);
    const [sendPayment, setSendPayment]     = useState<SendPaymentModel>({} as SendPaymentModel);
    const [plan, setPlan]                   = useState<number>(2);
    const [creditData, setCreditData]       = useState<CreditModel>({} as CreditModel);

    return {
        step,
        methodPayment,
        formRegister,
        sendPayment,
        plan,
        creditData,
        setStep,
        setFormRegister,
        setMethodPayment,
        setSendPayment,
        setPlan,
        setCreditData,
    }
}