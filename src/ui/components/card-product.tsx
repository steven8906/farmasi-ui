import {currencyFormatter} from "../../cross-cutting/utils";
import useBasketStore from "../../application/store/use-basket-store";

type Props = {
    image?       : string|undefined,
    name         : string,
    currentValue : string,
    before_price : string | number | undefined
};
export default function CardProduct({image, name, currentValue, before_price}: Props) {
    const { products } = useBasketStore();

    return <><pre>{JSON.stringify(products, null, 3)}</pre>
        <div className="card border-0 shadow">
            {image && <img src={`data:image/png;base64,${image}`} className="card-img-top" alt="Ofertas"/>}
        </div>
        <div className={"px-5 mt-3 d-flex flex-column justify-content-center align-items-center gap-3"}>
            <p className={"text-center"}>{name}</p>
            <div className={"d-flex justify-content-center gap-3"}>
                <p className={"font-semi-bold text-primary font-size-18"}>{currencyFormatter(parseFloat(currentValue))}</p>
                {before_price ? <p className={"font-regular font-size-18"}><span>{currencyFormatter(parseFloat(before_price as string))}</span></p> : null}
            </div>
            <button className={"btn btn-primary font-semi-bold text-center text-white m-auto px-3"}>
                Añadir al carrito
            </button>
        </div>
    </>
}