import Hero from "./components/hero";
import Downloads from "./components/downloads-section";
import Promo from "./components/promo";
import {useEffect, useState} from "react";
import httpServices from "../../../application/services/http-services";
import {Product} from "../../../data/models/product-model";
import ResponseModel from "../../../data/models/response-model";
import ListProducts from "./components/list-products";
import useSession from "../../../application/use-cases/use-session";

export default function Store(){
    const [products, setProductList]                 = useState<Product[]>([]);
    const [productsPromo, setProductListPromo]       = useState<Product[]>([]);
    const {
        getHeaderAuth,
        formDataBanner,
        getConfig,
        formDataDownloads
    } = useSession();

    useEffect(() => {
        getProducts();
        getProductsPromo();
        getConfig();
    }, [])

    function getProducts(): void {
        httpServices.getNoPaginate<ResponseModel<Product[]>>({ action: 'products/new-products' , ...getHeaderAuth()})
            .then(res => setProductList(res.data.data))
    }

    function getProductsPromo(): void {
        httpServices.getNoPaginate<ResponseModel<Product[]>>({ action: 'products/promos', ...getHeaderAuth() })
            .then(res => setProductListPromo(res.data.data))
    }

    return <>
        <Hero formDataBanner={formDataBanner}/>
        <Downloads dataDownloads={formDataDownloads}/>
        <ListProducts title={"¡Novedades!"} products={products}/>
        <Promo formDataBanner={formDataBanner}/>
        <ListProducts title={"¡Promociones!"} products={productsPromo}/>
    </>
}