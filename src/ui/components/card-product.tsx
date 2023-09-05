import {Product} from "../../data/models/product-model";
import {currencyFormatter} from "../../cross-cutting/utils";

export default function CardProduct({imgPath, name, currentValue, beforeValue}: Partial<Product>) {

    return <>
        <div className="card border-0 shadow">
            <img src={`data:image/png;base64,${imgPath}`} className="card-img-top" alt="Ofertas"/>
        </div>
        <div className={"px-5 mt-3 d-flex flex-column justify-content-center align-items-center gap-3"}>
            <p className={"text-center"}>{name}</p>
            <div className={"d-flex justify-content-center gap-3"}>
                <p className={"font-semi-bold text-primary font-size-18"}>{currencyFormatter(currentValue as number)}</p>
                {beforeValue ? <p className={"font-regular font-size-18"}><strike>{currencyFormatter(beforeValue)}</strike></p> : null}
            </div>
            <button className={"btn btn-primary font-semi-bold text-center text-white m-auto px-3"}>
                Añadir al carrito
            </button>
        </div>
    </>
}