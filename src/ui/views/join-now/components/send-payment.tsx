import visaLogo from "../../../../infrastructure/assets/img/visa.png";
import masterCardLogo from "../../../../infrastructure/assets/img/master-card.png";
import "../styles/_join-now.scss";
import useJoinNowContext from "../use-cases/useJoinNowContext";
import {ChangeEvent, FormEvent, useState} from "react";
import {SelectChangeEvent} from "@mui/material";
import {validateAlphabetic} from "../../../../cross-cutting/utils";
import useAppContext from "../../../../application/use-cases/use-app-context";

export default function SendPayment() {
    const {sendPayment, setStep, setSendPayment} = useJoinNowContext();
    const [isEdit, setIsEdit]                    = useState<boolean>();
    const {plan}                                 = useAppContext();

    function onChange(ev: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent): void {
        const {name, value, type, checked} = ev.target;
        const validation = {
            "tel": text => validateAlphabetic(text),
            "text": text => text,
            "checkbox": () => checked,
        }
        setSendPayment(prevState => ({
            ...prevState,
            [name]: validation[type] ? validation[type](value) : value
        }))
    }

    function onSubmit(ev: FormEvent<HTMLFormElement>): void {
        ev.preventDefault();
        const checkDataInvoice = !sendPayment.addressInvoice ||
            sendPayment.addressInvoice === '' ||
            !sendPayment.nameInvoice ||
            sendPayment.nameInvoice === '';

        if (checkDataInvoice) {
            alert('Debe ingresar los datos de facturación.');
            return;
        }

        setStep(4);
    }

    return (
        <>
            <div className={"container py-5"}>
                <form className={"row justify-content-between"} onSubmit={onSubmit}>
                    <div className={"col-sm-12 col-lg-8"}>
                        <div className={"card border-dark p-5"}>
                            <div className={"send-payment__form"}>
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
                                        <input className={"border-radius-6 w-100"}
                                               type={"tel"}
                                               maxLength={20}
                                               name={"cardNumber"}
                                               value={sendPayment.cardNumber ?? ""}
                                               required={true}
                                               onChange={onChange}/>
                                    </div>
                                    <div className={"col-sm-12 col-md-4 mb-3"}>
                                        <label className={"d-block font-semi-bold font-size-14 text-dark"}>
                                            Mes de vencimiento <span className={"text-danger"}>*</span>
                                        </label>
                                        <input className={"border-radius-6 w-100"}
                                               type={"number"}
                                               name={"month"}
                                               value={sendPayment.month ?? ""}
                                               maxLength={2}
                                               max={12}
                                               min={1}
                                               required={true}
                                               onChange={onChange}/>
                                    </div>
                                    <div className={"col-sm-12 col-md-4 mb-3"}>
                                        <label className={"d-block font-semi-bold font-size-14 text-dark"}>
                                            Año de vencimiento <span className={"text-danger"}>*</span>
                                        </label>
                                        <input className={"border-radius-6 w-100"}
                                               type={"number"}
                                               maxLength={2}
                                               name={"year"}
                                               value={sendPayment.year ?? ""}
                                               required={true}
                                               min={parseInt(new Date().getFullYear().toString().substring(2))}
                                               onChange={onChange}/>
                                        <pre>{}</pre>
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
                                        <input className={"border-radius-6 w-100"}
                                               maxLength={50}
                                               name={"name"}
                                               value={sendPayment.name ?? ""}
                                               required={true}
                                               onChange={onChange}/>
                                    </div>
                                    <div className={"col-sm-12 col-md-4 mb-3"}>
                                        <label className={"d-block font-semi-bold font-size-14 text-dark"}>
                                            Código de seguridad <span className={"text-danger"}>*</span>
                                        </label>
                                        <input className={"border-radius-6 w-100"}
                                               type={"number"}
                                               maxLength={3}
                                               name={"securityCode"}
                                               value={sendPayment.securityCode ?? ""}
                                               required={true}
                                               onChange={onChange}/>
                                    </div>
                                </div>
                            </div>
                            <br/>
                        </div>
                    </div>
                    <div className={"col-sm-12 col-lg-4 mt-sm-2 mt-lg-0"}>
                        <div className={"bg-secondary p-3"}>
                            <p className={"font-regular font-size-18"}>Dirección de facturación</p>
                        </div>
                        <div className={"send-payment__address p-3"}>
                            <p className={"font-regular font-size-14 mb-2"}>Nombre: {sendPayment.nameInvoice}</p>
                            {isEdit && <input className={"border-radius-6 w-100 border-0"}
                                              name={"nameInvoice"}
                                              value={sendPayment.nameInvoice ?? ""}
                                              required={true}
                                              autoComplete={'off'}
                                              onChange={onChange}/>}
                            <p className={"font-regular font-size-14 mb-2"}>Dirección: {sendPayment.addressInvoice}</p>
                            {isEdit && <input className={"border-radius-6 w-100 border-0"}
                                              name={"addressInvoice"}
                                              value={sendPayment.addressInvoice ?? ""}
                                              required={true}
                                              autoComplete={'off'}
                                              onChange={onChange}/>}
                            <br/>
                            <br/>
                            <div className={"d-flex justify-content-end mb-3"}>
                                <button className={"btn border-1 border-dark bg-transparent"}
                                        type={"button"}
                                        onClick={() => isEdit ? setIsEdit(false) : setIsEdit(true)}>
                                    <i className='bx bx-pencil'/>
                                    <span>{isEdit ? 'Guardar' : 'Editar'}</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={"d-flex justify-content-center my-5 gap-5"}>
                        <button className={"btn btn-primary font-semi-bold text-white ms-3 px-5"}
                                type={"button"}
                                onClick={() => setStep(2)}>Atrás
                        </button>
                        <button className={"btn btn-success font-semi-bold text-white ms-3 px-5"}
                                type={"submit"}>
                            Siguiente
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}