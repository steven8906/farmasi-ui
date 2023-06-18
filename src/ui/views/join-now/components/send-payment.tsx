import visaLogo from "../../../../infrastructure/assets/img/visa.png";
import masterCardLogo from "../../../../infrastructure/assets/img/master-card.png";
import "../syles/_join-now.scss";

export default function SendPayment() {

    return (
        <>
            <div className={"container py-5"}>
                <div className={"row justify-content-between"}>
                    <div className={"col-sm-12 col-lg-8"}>
                        <div className={"card border-dark p-5"}>
                            <form className={"send-payment__form"}>
                                <div className={"row"}>
                                    <div className={"col-sm-12 col-md-4 mb-3 d-none d-sm-block d-md-none"}>
                                        <div className={"d-flex justify-content-start align-items-center gap-5"}>
                                            <img alt={"logo-card"} src={visaLogo} width={70}/>
                                            <img alt={"logo-card"} src={masterCardLogo} width={70}/>
                                        </div>
                                    </div>
                                    <div className={"col-sm-12 col-md-4 mb-3"}>
                                        <label className={"d-block font-semi-bold font-size-14 text-dark"}>
                                            Numero de tarjeta <span className={"text-danger"}>*</span>
                                        </label>
                                        <input className={"border-radius-6 w-100"}/>
                                    </div>
                                    <div className={"col-sm-12 col-md-4 mb-3"}>
                                        <label className={"d-block font-semi-bold font-size-14 text-dark"}>
                                            Mes de vencimiento <span className={"text-danger"}>*</span>
                                        </label>
                                        <input className={"border-radius-6 w-100"}/>
                                    </div>
                                    <div className={"col-sm-12 col-md-4 mb-3"}>
                                        <label className={"d-block font-semi-bold font-size-14 text-dark"}>
                                            Año de vencimiento <span className={"text-danger"}>*</span>
                                        </label>
                                        <input className={"border-radius-6 w-100"}/>
                                    </div>
                                    <div className={"col-sm-12 col-md-4 mb-3 d-none d-md-block"}>
                                        <div className={"d-flex justify-content-start align-items-center gap-5"}>
                                            <img alt={"logo-card"} src={visaLogo} width={70}/>
                                            <img alt={"logo-card"} src={masterCardLogo} width={70}/>
                                        </div>
                                    </div>
                                    <div className={"col-sm-12 col-md-4 mb-3"}>
                                        <label className={"d-block font-semi-bold font-size-14 text-dark"}>
                                            Nombre del titular de la tarjeta <span className={"text-danger"}>*</span>
                                        </label>
                                        <input className={"border-radius-6 w-100"}/>
                                    </div>
                                    <div className={"col-sm-12 col-md-4 mb-3"}>
                                        <label className={"d-block font-semi-bold font-size-14 text-dark"}>
                                            Código de seguridad <span className={"text-danger"}>*</span>
                                        </label>
                                        <input className={"border-radius-6 w-100"}/>
                                    </div>
                                </div>
                            </form>
                            <br/>
                        </div>
                    </div>
                    <div className={"col-sm-12 col-lg-4 mt-sm-2 mt-lg-0"}>
                        <div className={"bg-secondary p-3"}>
                            <p className={"font-regular font-size-18"}>Dirección de facturación</p>
                        </div>
                        <div className={"send-payment__address p-3"}>
                            <p className={"font-regular font-size-14"}>Yolanda Caballero</p>
                            <p className={"font-regular font-size-14"}>CI: 7. 123.456</p>
                            <p className={"font-regular font-size-14"}>Dirección:</p>
                            <p className={"font-regular font-size-14"}>Ciudad del este, Km7 Ciudad nueva.</p>
                            <br/>
                            <div className={"d-flex justify-content-end mb-3"}>
                                <button className={"btn border-1 border-dark bg-transparent"}>
                                    <i className='bx bx-pencil'/>
                                    <span>Editar</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}