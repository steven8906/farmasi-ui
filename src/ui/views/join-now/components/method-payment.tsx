import {FormControlLabel, Radio, RadioGroup} from "@mui/material";
import useJoinNowContext from "../use-cases/useJoinNowContext";
import {ChangeEvent} from "react";
import {MethodPaymentType} from "../types/method-payment-type";

export default function MethodPayment() {
    const {setStep, methodPayment, setMethodPayment} = useJoinNowContext();

    function onChange(ev: ChangeEvent<HTMLInputElement>): void {
        if (ev.target.checked) {
            setMethodPayment(ev.target.value as MethodPaymentType);
            setStep(3);
        }
    }

    return (
        <>
            <h1 className={"font-bold font-size-40 text-center"}>Métodos de pago</h1>

            <div className={"container m-auto py-4"}>
                <div>
                    <RadioGroup row className={"row justify-content-center gap-3"}>
                        <div
                            className={"cursor-pointer__hover method-payment__radio-item col-sm-12 col-md-8 col-lg-auto border-1 border-dark-subtle border-radius-10 "}>
                            <FormControlLabel value="debit-credit"
                                              control={<Radio color={"error"}
                                                              checked={methodPayment === 'debit-credit'}
                                                              onChange={onChange}/>}
                                              label="Tarjeta de Débito / Crédito"/>
                        </div>
                        <div
                            className={"cursor-pointer__hover method-payment__radio-item col-sm-12 col-md-8 col-lg-auto border-1 border-dark-subtle border-radius-10 "}>
                            <FormControlLabel value="banker-transfer"
                                              control={<Radio color={"error"}
                                                              checked={methodPayment === 'banker-transfer'}
                                                              onChange={onChange}/>}
                                              label="Transferencia bancaria"/>
                        </div>
                        {/*<div*/}
                        {/*    className={"cursor-pointer__hover method-payment__radio-item col-sm-12 col-md-8 col-lg-auto border-1 border-dark-subtle border-radius-10 "}>*/}
                        {/*    <FormControlLabel value="tigo-money"*/}
                        {/*                      control={<Radio color={"error"}*/}
                        {/*                                      checked={methodPayment === 'tigo-money'}*/}
                        {/*                                      onChange={onChange}/>}*/}
                        {/*                      label="Tigo Money"/>*/}
                        {/*</div>*/}
                        {/*<div*/}
                        {/*    className={"cursor-pointer__hover method-payment__radio-item col-sm-12 col-md-8 col-lg-auto border-1 border-dark-subtle border-radius-10 "}>*/}
                        {/*    <FormControlLabel value="personal-cash"*/}
                        {/*                      control={<Radio color={"error"}*/}
                        {/*                                      checked={methodPayment === 'personal-cash'}*/}
                        {/*                                      onChange={onChange}/>}*/}
                        {/*                      label="Billetera Personal"/>*/}
                        {/*</div>*/}
                    </RadioGroup>
                </div>
                <div className={"d-flex justify-content-center mt-3"}>
                    {methodPayment &&
                        <button type={"button"} className={"btn btn-success"} onClick={() => setStep(3)}>
                            Siguiente
                        </button>}
                </div>
            </div>
        </>
    )
}