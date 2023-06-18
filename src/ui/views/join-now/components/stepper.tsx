import useJoinNowContext from "../use-cases/useJoinNowContext";

export default function Stepper() {
    const {step, setStep} = useJoinNowContext();

    return (
        <>
            <div className={"container py-5 d-flex justify-content-center gap-1"}>
                <div className={"text-center pe-2"}>
                    <button className={`btn ${step === 1 ? 'bg-primary' : 'btn-outline-primary'} btn-circle-xl`}
                            onClick={() => setStep(1)}>
                        <span className={`${step === 1 ? 'text-white' : 'text-primary'} font-bold`}>1</span>
                    </button>
                    <p className={"text-primary font-size-12 font-bold mt-3"}>Registro</p>
                </div>
                <div className={"text-primary d-flex align-items-center mb-4"}>
                    <span className={"d-none d-lg-inline-block"}>---------</span>
                    <span className={"d-inline-block"}>-----</span>
                </div>
                <div className={"text-center"}>
                    <button className={`btn ${step === 2 ? 'bg-primary' : 'btn-outline-primary'} btn-circle-xl`}
                            onClick={() => setStep(2)}>
                        <span className={`${step === 2 ? 'text-white' : 'text-primary'} font-bold`}>2</span>
                    </button>
                    <p className={"text-primary font-size-12 font-bold mt-3"}>Métodos de pago</p>
                </div>
                <div className={"text-primary d-flex align-items-center mb-4"}>
                    <span className={"d-none d-lg-inline-block"}>---------</span>
                    <span className={"d-inline-block"}>-----</span>
                </div>
                <div className={"text-center"}>
                    <button className={`btn ${step === 3 ? 'bg-primary' : 'btn-outline-primary'} btn-circle-xl`}
                            onClick={() => setStep(3)}>
                        <span className={`${step === 3 ? 'text-white' : 'text-primary'} font-bold`}>3</span>
                    </button>
                    <p className={"text-primary font-size-12 font-bold mt-3"}>Envio y pago</p>
                </div>
                <div className={"text-primary d-flex align-items-center mb-4"}>
                    <span className={"d-none d-lg-inline-block"}>---------</span>
                    <span className={"d-inline-block"}>-----</span>
                </div>
                <div className={"text-center"}>
                    <button className={`btn ${step === 4 ? 'bg-primary' : 'btn-outline-primary'} btn-circle-xl`}
                            onClick={() => setStep(4)}>
                        <span className={`${step === 4 ? 'text-white' : 'text-primary'} font-bold`}>4</span>
                    </button>
                    <p className={"text-primary font-size-12 font-bold mt-3"}>Confirmacón</p>
                </div>
            </div>
        </>
    )
}