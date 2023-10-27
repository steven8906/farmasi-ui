import httpServices from "../../../../application/services/http-services";
import {Product} from "../../../../data/models/product-model";
import {ChangeEvent, useEffect, useState} from "react";
import ResponseModel, {PaginateResponse} from "../../../../data/models/response-model";
import SectionShopType from "../../../../data/types/section-shop-type";
import FormModel from "../models/form-model";
import SearchModel from "../../../../data/models/search-model";
import useSession from "../../../../application/use-cases/use-session";
import {toast} from "react-toastify";
import HttpMessages from "../../../../cross-cutting/http-messages";

export type FormBank = {
    name_bank               : string
    name_owner_account_bank : string
    number_account_bank     : string
    type_account_bank       : string
}
export type Banner = {
    banner_image_one        : string
    banner_image_two        : string
    banner_image_three      : string
    bottom_banner_image     : string
    percent                 : number|string
    text_bottom_banner      : string
}
export type Downloads = {
    download_one_url  : string
    download_one_name : string
    download_two_url  : string
    download_two_name : string
}
export default function () {
    const [products, setProducts]                 = useState<PaginateResponse<Product[]> | undefined>(undefined);
    const [originalProducts, setOriginalProducts] = useState<PaginateResponse<Product[]> | undefined>(undefined);
    const [form, setForm]                         = useState<FormModel>({} as FormModel);
    const [isLoading, setIsLoading]               = useState<boolean>(false);
    const {
        getHeaderAuth,
        getConfig,
        setFormDataBank,
        setDataDownloads,
        formDataBank,
        formDataBanner,
        formDataDownloads,
    } = useSession();

    useEffect(() => {
        getProducts();
    }, [])

    function getProducts(type: SectionShopType = 'ALL', page = 1): void {
        setIsLoading(true);
        httpServices.get<Product[]>({action: `products/${type}?page=${page}`, ...getHeaderAuth()})
            .then(res => {
                setProducts(res.data);
                setOriginalProducts(res.data);
            })
            .finally(()=> setIsLoading(false));
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
            }).then(({data }) => setProducts((data as unknown as PaginateResponse<Product[]>)))
        }else setProducts(originalProducts);
    }

    function onFormBankChange(ev: ChangeEvent<HTMLInputElement|HTMLSelectElement>): void {
        const { value, name } = ev.target;
        setFormDataBank(prevState => ({...prevState, [name]: value}));
    }

    function saveBank(): void {
        httpServices.post<FormBank, ResponseModel<boolean>>({
            action: 'products/banks',
            data: {...formDataBank},
            ...getHeaderAuth()
        }).then(() => toast(HttpMessages.OkRequest, {type: 'success'}))
    }

    function onChangeCategory(ev:ChangeEvent<HTMLSelectElement>, product:Product):void {
        ev.preventDefault();
        if (confirm('¿En verdad desea cambiar el registro?')){
            const {value : category}   = ev.target;
            const {id    : id_product} = product;
            httpServices.post<{ category:string, id_product:number }, ResponseModel<boolean>>({
                action: 'products/change-category',
                data: { category, id_product },
                ...getHeaderAuth()
            }).then(() => {
                toast(HttpMessages.OkRequest, {type: 'success'});
                getProducts();
            });
        }
    }

    return {
        products,
        formDataBank,
        formDataBanner,
        formDataDownloads,
        isLoading,
        setDataDownloads,
        setState,
        onChange,
        search,
        getProducts,
        getConfig,
        onFormBankChange,
        saveBank,
        getHeaderAuth,
        onChangeCategory,
    }
}
