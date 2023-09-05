import visaLogo from "../../../../infrastructure/assets/img/visa.png";
import masterCardLogo from "../../../../infrastructure/assets/img/master-card.png";
import "../styles/_join-now.scss";
import useJoinNowContext from "../use-cases/useJoinNowContext";
import {ChangeEvent, FormEvent, useState} from "react";
import {SelectChangeEvent} from "@mui/material";
import {validateAlphabetic} from "../../../../cross-cutting/utils";
import CreditCard from "../../../components/credit-card/credit-card";
import useConfirmation from "../use-cases/use-confirmation";

export default function SendPayment() {
    const {sendPayment, setStep, setSendPayment} = useJoinNowContext();
    const [isEdit, setIsEdit]                    = useState<boolean>();
    const {sendConfirmation}                     = useConfirmation();

    function onChange(ev: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | SelectChangeEvent>): void {
        const {name, value, type, checked} = (ev.target as (HTMLInputElement|HTMLTextAreaElement) & { checked: boolean});
        const validation: Record<string, CallableFunction> = {
            "tel"      : (text: string) => validateAlphabetic(text),
            "number"   : (text: string) => validateAlphabetic(text),
            "text"     : (text: string) => text,
            "checkbox" : ()   => checked,
        }
        setSendPayment(prevState => ({
            ...prevState,
            [name]: validation[type] ? validation[type](value) : value
        }));
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
        sendConfirmation();
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
                                    <CreditCard/>
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