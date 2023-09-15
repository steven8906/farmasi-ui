import httpServices from "../../../../application/services/http-services";
import {Product} from "../../../../data/models/product-model";
import {ChangeEvent, useEffect, useState} from "react";
import ResponseModel, {PaginateResponse} from "../../../../data/models/response-model";
import SectionShopType from "../../../../data/types/section-shop-type";
import FormModel from "../models/form-model";
import SearchModel from "../../../../data/models/search-model";
import useSession from "../../../../application/use-cases/use-session";
import {Config} from "../../../../data/models/session-model";
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
}
export default function () {
    const [products, setProducts]                 = useState<PaginateResponse<Product[]> | undefined>(undefined);
    const [originalProducts, setOriginalProducts] = useState<PaginateResponse<Product[]> | undefined>(undefined);
    const [form, setForm]                         = useState<FormModel>({} as FormModel);
    const [formDataBank, setFormDataBank]         = useState<FormBank>({} as FormBank);
    const [formDataBanner, setFormDataBanner]     = useState<Banner>({} as Banner);
    const {getHeaderAuth}                         = useSession();

    useEffect(() => {
        getProducts();
        getConfig();
    }, [])

    function getProducts(type: SectionShopType = 'ALL', page = 1): void {
        httpServices.get<Product[]>({action: `products/${type}?page=${page}`, ...getHeaderAuth()})
            .then(res => {
                setProducts(res.data);
                setOriginalProducts(res.data);
            })
    }

    function getConfig(): void {
        httpServices.getNoPaginate<ResponseModel<Config>>({action: 'products/config', ...getHeaderAuth()})
            .then(res => {
                const dataBank: FormBank = {
                    name_bank               : res.data.data.name_bank,
                    name_owner_account_bank : res.data.data.name_owner_account_bank,
                    number_account_bank     : res.data.data.number_account_bank,
                    type_account_bank       : res.data.data.type_account_bank,
                };
                const dataBanner: Banner = {
                    banner_image_one    : res.data.data.banner_image_one,
                    banner_image_two    : res.data.data.banner_image_two,
                    banner_image_three  : res.data.data.banner_image_three,
                    bottom_banner_image : res.data.data.bottom_banner_image,
                };
                setFormDataBank(dataBank);
                setFormDataBanner(dataBanner);
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

    return {
        products,
        formDataBank,
        formDataBanner,
        setState,
        onChange,
        search,
        getProducts,
        onFormBankChange,
        saveBank,
    }
}
