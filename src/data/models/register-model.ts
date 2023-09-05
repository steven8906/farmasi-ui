import Plans from "../../cross-cutting/plans";
import {Dayjs} from "dayjs";

export default interface RegisterModel {
    plan           : Plans;
    department     : string
    city           : string
    name           : string
    lastName       : string
    identification : string
    email          : string
    phone          : string
    password       : string
    password_two   : string
    agree          : string
    gender         : string
    date           : Dayjs|string
}