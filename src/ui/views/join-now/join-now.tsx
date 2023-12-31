import JoinNowContext from "./context/JoinNowContext";
import useJoinNow from "./use-cases/useJoinNow";
import Stepper from "./components/stepper";
import Register from "./components/register";
import MethodPayment from "./components/method-payment";
import SendPayment from "./components/send-payment";
import Confirmation from "./components/confirmation";

export default function JoinNow() {
    const {
        setStep,
        setFormRegister,
        setMethodPayment,
        setSendPayment,
        setCreditData,
        planRoute,
        byRoute,
        creditData,
        step,
        formRegister,
        methodPayment,
        sendPayment,
    } = useJoinNow();

    return (
        <>
            <JoinNowContext.Provider value={{
                setStep,
                setFormRegister,
                setMethodPayment,
                setSendPayment,
                setCreditData,
                step,
                creditData,
                formRegister,
                methodPayment,
                sendPayment,
                byRoute,
            }}>
                <section className={"bg-primary-light"}>
                    <Stepper/>
                    <div className={"w-90 m-auto"}>
                        <hr/>
                    </div>
                    <div className={"py-3"}>
                        {!planRoute ?
                            <>
                                {step === 1 && <Register/>}
                                {step === 2 && <MethodPayment/>}
                                {step === 3 && <SendPayment/>}
                                {step === 4 && <Confirmation/>}
                            </> :
                            <>
                                {step === 2 && <MethodPayment/>}
                                {step === 3 && <SendPayment/>}
                                {step === 4 && <Confirmation/>}
                            </>}
                    </div>
                </section>
            </JoinNowContext.Provider>
        </>
    )
}