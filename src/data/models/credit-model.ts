import CreditFocusType from "../types/credit-focus-type";

export default interface CreditModel {
    number      : string,
    cvc         : string,
    name        : string,
    expiry      : string,
    expiry_year : string,
    focus       : CreditFocusType,
}