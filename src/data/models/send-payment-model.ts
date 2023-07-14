export default interface SendPaymentModel {
    cardNumber     : number;
    month          : number;
    year           : number;
    name           : string;
    securityCode   : number;
    addressInvoice : string;
    nameInvoice    : string;
}