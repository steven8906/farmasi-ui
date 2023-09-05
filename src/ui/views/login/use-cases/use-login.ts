import React, {FormEvent, useState} from "react";
import httpServices from "../../../../application/services/http-services";
import {AxiosError, AxiosResponse} from "axios";
import {toast} from "react-toastify";
import SessionModel from "../../../../data/models/session-model";
import useLoading from "../../../../application/use-cases/use-loading";
import ResponseModel from "../../../../data/models/response-model";
import useAppContext from "../../../../application/use-cases/use-app-context";
import HttpMessages from "../../../../cross-cutting/http-messages";
import {useNavigate} from "react-router-dom";
import RoutesPath from "../../../../infrastructure/router/routes-path";

type LoginFormType = {
    email    : string;
    password : string;
}
export default function useLogin() {
    const [loginForm, setLoginForm] = useState<LoginFormType>({} as LoginFormType);
    const {show, hide}              = useLoading();
    const {setSession}              = useAppContext();
    const navigate                  = useNavigate();

    function onChange(ev: React.ChangeEvent<HTMLInputElement>): void {
        const {name, value} = ev.target;
        setLoginForm(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    async function login(ev: FormEvent): Promise<void> {
        ev.preventDefault();
        show();
        httpServices.post<LoginFormType, SessionModel>({action: 'auth/login', data: {...loginForm}})
            .then(checkLoginSuccess)
            .catch(checkError)
            .finally(hide)
    }

    function checkLoginSuccess(res: AxiosResponse<ResponseModel<SessionModel>>):void {
        toast(HttpMessages.OkRequest, { type: 'success' });
        setSession(res.data.data);
        navigate(RoutesPath.SHOP);
    }

    function checkError(err: AxiosError):void {
        const message = err.response?.status === 401 ?
            (err.response.data as { message: string }).message :
            JSON.stringify(err.response?.data);
        toast(message, {type: 'error'});
    }

    return {
        login,
        onChange,
    }
}