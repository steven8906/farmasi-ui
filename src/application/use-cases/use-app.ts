import {useEffect, useState} from "react";
import ProductModel from "../../data/models/product-model";
import data from "../../data/repository/products";
import Plans from "../../cross-cutting/plans";

export default function useApp() {
    const [productList, setProductList] = useState<ProductModel[]>([]);
    const [plan, setPlan]               = useState<Plans|undefined>();

    useEffect(() => {
        setProductList([...data]);
    }, [])

    return {
        productList,
        plan,
        setPlan
    }
}