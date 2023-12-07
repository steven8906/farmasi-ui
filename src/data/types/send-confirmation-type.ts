import RegisterModel from "../models/register-model.ts";
import SendPaymentModel from "../models/send-payment-model.ts";
import Plans from "../../cross-cutting/plans.ts";
import {MethodPaymentType} from "../../ui/views/join-now/types/method-payment-type.ts";

type SendConfirmationType =
    RegisterModel
    & SendPaymentModel
    & { plan: Plans }
    & { methodPayment: MethodPaymentType };

export default SendConfirmationType;
