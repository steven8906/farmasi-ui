import {ChangeEvent, FormEvent, useState} from "react";
import RegisterModel from "../../../../data/models/register-model";
import {SelectChangeEvent} from "@mui/material";
import {validateAlphabetic} from "../../../../cross-cutting/utils";
import {Dayjs} from "dayjs";
import useJoinNowContext from "./useJoinNowContext";

export default function useRegister() {
    const {setFormRegister, setStep, formRegister}  = useJoinNowContext();
    const [formRegisterState, setFormRegisterState] = useState<RegisterModel>(formRegister);

    function setDataForm(ev: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent): void {
        const {name, value, type, checked} = ev.target;
        const validation = {
            "tel"      : text => validateAlphabetic(text),
            "checkbox" :()=> checked,
        }
        setFormRegisterState(prevState => ({
            ...prevState,
            [name]: validation[type] ? validation[type](value) : value
        }))
    }

    function setDate(date: Dayjs): void {
        setFormRegisterState(prevState => ({...prevState, date}))
    }

    function onSubmit(ev: FormEvent<HTMLFormElement>): void {
        ev.preventDefault();
        if (!formRegisterState.date) {
            alert("Debe seleccionar fecha de nacimiento.");
            return;
        }
        if (formRegisterState.password !== formRegisterState.password_two) {
            alert("Las contraseñas no coinciden.");
            return;
        }
        setFormRegister(formRegisterState);
        setStep(2);
    }

    return {
        formRegisterState,
        setFormRegisterState,
        setDataForm,
        setDate,
        onSubmit,
    }
}