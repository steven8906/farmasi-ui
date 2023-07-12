import {useEffect, useState} from "react";
import ProductModel from "../../data/models/product-model";
import data from "../../data/repository/products";

export default function useApp() {
    const [productList, setProductList] = useState<ProductModel[]>([]);

    useEffect(() => {
        setProductList([...data]);
    }, [])

    return {
        productList,
    }
}