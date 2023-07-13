import {useState} from "react";
import RegisterModel from "../../../../data/models/register-model";

export default function useJoinNow() {
    const [step, setStep]                 = useState<1 | 2 | 3 | 4>(1);
    const [formRegister, setFormRegister] = useState<RegisterModel>({} as RegisterModel);

    return {
        step,
        setStep,
        formRegister,
        setFormRegister,
    }
}