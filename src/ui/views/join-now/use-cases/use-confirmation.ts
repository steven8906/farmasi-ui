import RegisterModel from "../../../../data/models/register-model";
import {MethodPaymentType} from "../types/method-payment-type";
import SendPaymentModel from "../../../../data/models/send-payment-model";
import useJoinNowContext from "./useJoinNowContext";
import useAppContext from "../../../../application/use-cases/use-app-context";
import Plans from "../../../../cross-cutting/plans";
import httpServices from "../../../../application/services/http-services";
import {Dayjs} from "dayjs";
import useLoading from "../../../../application/use-cases/use-loading";
import {AxiosError, AxiosResponse} from "axios";
import ResponseModel from "../../../../data/models/response-model";
import {toast} from "react-toastify";

type SendConfirmationType =
    RegisterModel
    & SendPaymentModel
    & { plan: Plans }
    & { methodPayment: MethodPaymentType };
export default function useConfirmation() {
    const {formRegister, methodPayment, sendPayment, setStep} = useJoinNowContext();
    const {plan}                                              = useAppContext();
    const {show, hide}                                        = useLoading();

    function sendConfirmation(): void {
        show();
        const data: SendConfirmationType = {
            ...formRegister,
            ...sendPayment,
            methodPayment,
            plan: plan as Plans,
            date: (formRegister.date as Dayjs).format('YYYY-MM-DD')
        }

        httpServices.post<SendConfirmationType, boolean>({action: 'auth/register', data})
            .then(callResponse)
            .catch(callCatch)
            .finally(hide);
    }

    function callResponse(res: AxiosResponse<ResponseModel<boolean>>): void {
        toast('¡Solicitud exitosa!', {type: 'success'})
        if (res.data.code === 200) setStep(4);
    }

    const callCatch = (res: AxiosError): void => {
        if (res.response.status === 400) {
            const {errors} = res.response.data;
            const errorValues = Object.values(errors);console.error(errorValues.flat())
            Array.isArray(errorValues) && errorValues.flat().forEach(x => toast.error(x));
        } else {
            toast.error(JSON.stringify(res.response?.data));
        }
    }

    return {
        sendConfirmation,
    }
}