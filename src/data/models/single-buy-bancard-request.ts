export default interface SingleBuyBancardRequest {
    public_key : string;
    operation  : Operation;
}

interface Operation {
    token           : string;
    shop_process_id : number;
    currency        : string;
    amount          : string;
    additional_data : string;
    description     : string;
    return_url      : string;
    cancel_url      : string;
}
