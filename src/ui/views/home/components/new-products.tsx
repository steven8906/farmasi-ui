import "../styles/_new-products.scss";
import {useEffect, useState} from "react";
import {Product} from "../../../../data/models/product-model";
import httpServices from "../../../../application/services/http-services";
import ResponseModel from "../../../../data/models/response-model";

export default function NewProducts() {
    const [newProductList, setNewProductList] = useState<Product[]>([]);

    useEffect(()=> {
        getNewProducts();
    }, [])

    function getNewProducts(): void {
        httpServices.getNoPaginate<ResponseModel<Product[]>>(
            {
                action: 'products/new-products',
            }).then(res => setNewProductList(res.data.data))
    }

    return (
        <>
            <section className={"new-products"}>
                <article className={"container"}>
                    <h2 className={"text-bold"}>¡Nuevos productos!</h2>
                    <div className={"row mt-5 pb-100"}>
                        {newProductList.length > 0 && newProductList.map((x, index) =>
                            <div className={"col-sm-6 col-lg-3 mb-3"} key={`product-${index}`}>
                                <div className="new-products__card card shadow w-100 my-4">
                                    <img src={`data:image/jpeg;base64,${x.image}`}
                                         className="card-img " alt="" height={350} width={200}/>
                                </div>
                                <button className={"btn btn-primary text-white m-auto d-block w-50"}>
                                    Ver producto
                                </button>
                            </div>)}
                    </div>
                </article>
            </section>
        </>
    )
}