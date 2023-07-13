import {ChangeEvent, FormEvent, useState} from "react";
import RegisterModel from "../../../../data/models/register-model";
import {SelectChangeEvent} from "@mui/material";
import {validateAlphabetic} from "../../../../cross-cutting/utils";
import {Dayjs} from "dayjs";
import useValidate from "../../../../application/use-cases/use-validate";

export default function useRegister() {
    const [formRegisterState, setFormRegisterState] = useState<RegisterModel>({} as RegisterModel);
    const { validateAll } = useValidate();

    function setDataForm(ev: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent): void {
        const {name, value, type} = ev.target;

        const validation = {
            "tel"      : text    => validateAlphabetic(text),
            "checkbox" : (value) => value === 'on',
        }

        setFormRegisterState(prevState => ({
            ...prevState,
            [name]: validation[type] ? validation[type](value) : value
        }))
    }

    function setDate(date: Dayjs):void {
        setFormRegisterState(prevState => ({...prevState, date}))
    }

    function onSubmit(ev: FormEvent<HTMLFormElement>): void {
        ev.preventDefault();
        console.log(validateAll(['name']))
    }

    return {
        formRegisterState,
        setFormRegisterState,
        setDataForm,
        setDate,
        onSubmit,
    }
}