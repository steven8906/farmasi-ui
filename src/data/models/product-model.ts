import SectionShopType from "../types/section-shop-type";

export interface Product {
    id            : number
    cod           : string
    name          : string
    stock         : number
    price_a       : string
    price_b       : string
    price_c       : string
    before_price? : string|number
    usu           : string
    image?        : string
    type          : SectionShopType
    created_at    : Date | null
    updated_at    : Date | null
}