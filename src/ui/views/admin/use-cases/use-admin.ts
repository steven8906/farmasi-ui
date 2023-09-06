import httpServices from "../../../../application/services/http-services";
import {Product} from "../../../../data/models/product-model";
import {ChangeEvent, useEffect, useState} from "react";
import {PaginateResponse} from "../../../../data/models/response-model";
import SectionShopType from "../../../../data/types/section-shop-type";
import FormModel from "../models/form-model";
import SearchModel from "../../../../data/models/search-model";
import useSession from "../../../../application/use-cases/use-session";

export default function () {
    const [products, setProducts]                 = useState<PaginateResponse<Product[]> | undefined>(undefined);
    const [originalProducts, setOriginalProducts] = useState<PaginateResponse<Product[]> | undefined>(undefined);
    const [form, setForm]                         = useState<FormModel>({} as FormModel);
    const {getHeaderAuth}                         = useSession();

    useEffect(() => {
        getProducts();
    }, [])

    function getProducts(type: SectionShopType = 'ALL', page = 1): void {
        httpServices.get<Product[]>({action: `products/${type}?page=${page}`, ...getHeaderAuth()})
            .then(res => {
                setProducts(res.data);
                setOriginalProducts(res.data);
            })
    }

    const setState = (page: number) => getProducts('ALL', page);

    function onChange(ev: ChangeEvent<HTMLInputElement>): void {
        const {value, name} = ev.target;
        setForm(prevState => ({...prevState, [name]: value}));
    }

    function search(): void {
        if (form.product.length > 3) {
            const search: SearchModel = {
                table       : 'products',
                fields      : ['name', 'cod', 'name'],
                querySearch : form.product,
            }
            httpServices.post<SearchModel, Response>({
                action : 'products/search',
                data   : {...search},
                ...getHeaderAuth()
            }).then(({data }) => setProducts((data as PaginateResponse<Product[]>)))
        }else setProducts(originalProducts);
    }

    return {
        products,
        setState,
        onChange,
        search,
        getProducts,
    }
}
