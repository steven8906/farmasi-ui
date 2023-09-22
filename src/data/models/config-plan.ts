export default interface ConfigPlan {
    id         : number
    plan       : string
    price_1?   : string
    price_2?   : string
    price_3?   : string
    revenue    : string
    created_at : Date|null
    updated_at : Date|null
}