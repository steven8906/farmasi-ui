import {FormControlLabel, Radio, RadioGroup} from "@mui/material";

export default function MethodPayment() {

    return (
        <>
            <h1 className={"font-bold font-size-40 text-center"}>Métodos de pago</h1>

            <div className={"container m-auto py-4"}>
                <div>
                    <RadioGroup row className={"row justify-content-center gap-3"}>
                        <div
                            className={"cursor-pointer__hover method-payment__radio-item col-sm-12 col-md-8 col-lg-auto border-1 border-dark-subtle border-radius-10 "}>
                            <FormControlLabel value="female"
                                              control={<Radio color={"error"}/>}
                                              label="Tarjeta de Débito / Crédito"/>
                        </div>
                        <div
                            className={"cursor-pointer__hover method-payment__radio-item col-sm-12 col-md-8 col-lg-auto border-1 border-dark-subtle border-radius-10 "}>
                            <FormControlLabel value="male"
                                              control={<Radio color={"error"}/>}
                                              label="Transferencia bancaria"/>
                        </div>
                        <div
                            className={"cursor-pointer__hover method-payment__radio-item col-sm-12 col-md-8 col-lg-auto border-1 border-dark-subtle border-radius-10 "}>
                            <FormControlLabel value="other"
                                              control={<Radio color={"error"}/>}
                                              label="Tigo Money"/>
                        </div>
                        <div
                            className={"cursor-pointer__hover method-payment__radio-item col-sm-12 col-md-8 col-lg-auto border-1 border-dark-subtle border-radius-10 "}>
                            <FormControlLabel value="other"
                                              control={<Radio color={"error"}/>}
                                              label="Billetera Personal"/>
                        </div>
                    </RadioGroup>
                </div>
            </div>
        </>
    )
}