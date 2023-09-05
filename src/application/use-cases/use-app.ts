import {useState} from "react";
import {Product} from "../../data/models/product-model";
import Plans from "../../cross-cutting/plans";
import SessionModel from "../../data/models/session-model";
import {PaginateResponse} from "../../data/models/response-model";

export default function useApp() {
    const [productList, setProductList] = useState<PaginateResponse<Product[]>>({} as PaginateResponse<Product[]>);
    const [plan, setPlan]               = useState<Plans|undefined>();
    const [session, setSession]         = useState<SessionModel>({} as SessionModel)

    return {
        productList,
        plan,
        session,
        setPlan,
        setSession,
        setProductList,
    }
}