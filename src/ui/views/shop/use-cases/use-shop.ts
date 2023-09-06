import {useEffect, useState} from "react";
import useAppContext from "../../../../application/use-cases/use-app-context";
import {Product} from "../../../../data/models/product-model";
import httpServices from "../../../../application/services/http-services";
import SectionsShop from "../../../../data/types/section-shop-type";
import SectionShopType from "../../../../data/types/section-shop-type";
import useSession from "../../../../application/use-cases/use-session";

export default function useShop() {
    const [sectionShop, setSectionShop] = useState<SectionsShop>('MAQUILLAJE');
    const {productList, setProductList} = useAppContext();
    const {getHeaderAuth}               = useSession();

    useEffect(() => {
        getProducts('MAQUILLAJE');
    }, [])

    function getProducts(type: SectionShopType|string = '', page = 1): void {
        httpServices.get<Product[]>({ action: `products/${type}?page=${page}`, ...getHeaderAuth() })
            .then(res => setProductList(res.data))
    }

    const setPage = (type: SectionShopType, page:number):void => getProducts(type, page);

    return {
        sectionShop,
        productList,
        setSectionShop,
        setPage,
    }
}