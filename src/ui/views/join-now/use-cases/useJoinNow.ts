import {useState} from "react";

export default function useJoinNow() {
    const [step, setStep] = useState<1 | 2 | 3 | 4>(1);

    return {
        step,
        setStep,
    }
}