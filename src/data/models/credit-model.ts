export default interface CreditModel {
    number      : string,
    cvc         : string,
    name        : string,
    expiry      : string,
    expiry_year : string,
    focus       :  "name" | "number" | "expiry" | "cvc" | "",
}