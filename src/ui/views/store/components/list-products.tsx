import CardProduct from "../../../components/card-product";
import ProductModel from "../../../../data/product-model";

interface Props {
    title : string;
    data  : ProductModel[];
}

export default function ListProducts({title, data}:Props) {
    return <>
        <section className={"bg-primary-light p-3"}>
            <div className={"container"}>
                <h1 className={"font-bold"}>{title}</h1>
                <div className={"row justify-content-evenly my-5"}>
                    {data.map((x, index) =>
                        <div className={"col-sm-12 col-md-8 col-lg-3 mb-3"} key={`news-${index}`}>
                            <CardProduct imgPath={x.imgPath}
                                         name={x.name}
                                         beforeValue={x.beforeValue}
                                         currentValue={x.currentValue}/>
                        </div>)}
                </div>
            </div>
        </section>
    </>
}