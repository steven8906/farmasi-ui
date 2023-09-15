import CardProduct from "../../../components/card-product";
import {Product} from "../../../../data/models/product-model";

export default function ListProducts({title, products}: { title: string, products: Product[] }) {

    return <>
        <div className={"bg-primary-light"}>
            <div className={"container py-4"}>
                <h3 className={"font-bold"}>{title}</h3>
                <div className={"row justify-content-evenly my-5"}>
                    {products.map((x, index) =>
                        <div className={"col-sm-12 col-md-8 col-lg-3 mb-3"} key={`news-${index}`}>
                            <CardProduct image={x.image}
                                         name={x.name}
                                         currentValue={x.price_a}
                                         product={x}
                                         before_price={x.before_price}/>
                        </div>)}
                </div>
            </div>
        </div>
    </>
}