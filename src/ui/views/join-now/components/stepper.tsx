import useJoinNowContext from "../use-cases/useJoinNowContext";

export default function Stepper() {
    const {step, setStep, byRoute} = useJoinNowContext();

    return (
        <>
            <div className={"container py-5 d-flex justify-content-center gap-1"}>
                {!byRoute && <>
                    <div className={"text-center pe-2"}>
                        <button className={`btn ${step === 1 ? 'bg-primary' : 'btn-outline-primary'} btn-circle-xl`}
                                disabled={step <= 1}
                                onClick={() => setStep(1)}>
                            <span className={`${step === 1 ? 'text-white' : 'text-primary'} font-bold`}>1</span>
                        </button>
                        <p className={"text-primary font-size-12 font-bold mt-3"}>Registro</p>
                    </div>
                    <div className={"text-primary d-flex align-items-center mb-4"}>
                        <span className={"d-none d-lg-inline-block"}>---------</span>
                        <span className={"d-inline-block"}>-----</span>
                    </div>
                </>}
                <div className={"text-center"}>
                    <button className={`btn ${step === 2 ? 'bg-primary' : 'btn-outline-primary'} btn-circle-xl`}
                            disabled={step <= 2}
                            onClick={() => setStep(2)}>
                        <span className={`${step === 2 ? 'text-white' : 'text-primary'} font-bold`}>{ !byRoute ? 2: 1 }</span>
                    </button>
                    <p className={"text-primary font-size-12 font-bold mt-3"}>Métodos de pago</p>
                </div>
                <div className={"text-primary d-flex align-items-center mb-4"}>
                    <span className={"d-none d-lg-inline-block"}>---------</span>
                    <span className={"d-inline-block"}>-----</span>
                </div>
                <div className={"text-center"}>
                    <button className={`btn ${step === 3 ? 'bg-primary' : 'btn-outline-primary'} btn-circle-xl`}
                            disabled={step <= 3}
                            onClick={() => setStep(3)}>
                        <span className={`${step === 3 ? 'text-white' : 'text-primary'} font-bold`}>{ !byRoute ? 3 : 2 }</span>
                    </button>
                    <p className={"text-primary font-size-12 font-bold mt-3"}>Envío y pago</p>
                </div>
                <div className={"text-primary d-flex align-items-center mb-4"}>
                    <span className={"d-none d-lg-inline-block"}>---------</span>
                    <span className={"d-inline-block"}>-----</span>
                </div>
                <div className={"text-center"}>
                    <button className={`btn ${step === 4 ? 'bg-primary' : 'btn-outline-primary'} btn-circle-xl`}
                            disabled={step <= 4}
                            onClick={() => setStep(4)}>
                        <span className={`${step === 4 ? 'text-white' : 'text-primary'} font-bold`}>{ !byRoute ? 4 : 3 }</span>
                    </button>
                    <p className={"text-primary font-size-12 font-bold mt-3"}>Confirmación</p>
                </div>
            </div>
        </>
    )
}
