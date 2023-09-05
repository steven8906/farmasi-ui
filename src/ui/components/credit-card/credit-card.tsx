import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import useJoinNowContext from "../../views/join-now/use-cases/useJoinNowContext";
import {ChangeEvent} from "react";

export default function CreditCard() {
    const {creditData, setCreditData} = useJoinNowContext();

    const handleInputChange = (evt:ChangeEvent<HTMLInputElement>) => {
        const {name, value} = evt.target;

        if (name === "number" && value.length <= 20) {
            setCreditData((prev) => ({...prev, [name]: value}));
        } else if (name === "cvc") {
            const onlyDigits = /^[0-9]{0,4}$/;
            if (onlyDigits.test(value) || value === "") {
                setCreditData((prev) => ({...prev, [name]: value}));
            }
        } else if (name === "expiry") {
            const formattedValue = value
                .replace(/\D/g, "")
                .slice(0, 4);

            const month = formattedValue.slice(0, 2);
            const year = formattedValue.slice(2, 4);

            if (parseFloat(month) > 12) {
                setCreditData((prev) => ({...prev, [name]: year}));
            } else {
                setCreditData((prev) => ({...prev, [name]: formattedValue}));
            }
        } else if (name === "name") {
            const onlyLatinCharacters = /^[A-Za-z\sÑñÁáÉéÍíÓóÚúÜü]+$/;
            if (onlyLatinCharacters.test(value) || value === "") {
                setCreditData((prev) => ({...prev, [name]: value}));
            }
        }
    };

    const handleInputFocus = (evt:ChangeEvent<HTMLInputElement>) => {
        const focus = evt.target.name as any;
        setCreditData(prev => ({...prev, focus}));
    };

    return (
        <>
            <div className={"col-sm-12 col-md-4 mb-3"}>
                <label className={"d-block font-semi-bold font-size-14 text-dark"}>
                    Numero de tarjeta <span className={"text-danger"}>*</span>
                </label>
                <input className={"border-radius-6 w-100"}
                       type="tel"
                       name="number"
                       placeholder="Número de tarjeta"
                       value={creditData.number ?? ""}
                       onChange={handleInputChange}
                       onFocus={handleInputFocus}
                />
            </div>
            <div className={"col-sm-12 col-md-4 mb-3"}>
                <label className={"d-block font-semi-bold font-size-14 text-dark"}>
                    Mes/Año de vencimiento <span className={"text-danger"}>*</span>
                </label>
                <input
                    className={"border-radius-6 w-100"}
                    type="text"
                    name="expiry"
                    placeholder="Fecha de vencimiento (MMYY)"
                    value={creditData.expiry ?? ""}
                    maxLength={4}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                />
            </div>
            <div className={"col-sm-12 col-md-4 mb-3"}>
                <label className={"d-block font-semi-bold font-size-14 text-dark"}>
                    Código de seguridad <span className={"text-danger"}>*</span>
                </label>
                <input className={"border-radius-6 w-100"}
                       type="tel"
                       name="cvc"
                       placeholder="CVC"
                       value={creditData.cvc ?? ""}
                       onChange={handleInputChange}
                       onFocus={handleInputFocus}
                />
            </div>
            <div className={"col-sm-12 col-md-4 mb-3"}>
                <label className={"d-block font-semi-bold font-size-14 text-dark"}>
                    Nombre del titular de la tarjeta <span className={"text-danger"}>*</span>
                </label>
                <input className={"border-radius-6 w-100"}
                       type="text"
                       name="name"
                       placeholder="Nombre completo"
                       value={creditData.name ?? ""}
                       onChange={handleInputChange}
                       onFocus={handleInputFocus}
                />
            </div>
            <div className={"d-flex w-100 justify-content-sm-center justify-content-md-end"}>
                <div>
                    <Cards
                        number={creditData.number ?? ""}
                        cvc={creditData.cvc ?? ""}
                        name={creditData.name ?? ""}
                        expiry={creditData.expiry ?? ""}
                        focused={creditData.focus}
                        placeholders={{name: "NOMBRE DEL TITULAR"}}
                    />
                </div>
            </div>
        </>
    );
}
