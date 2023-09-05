import {Product} from "../models/product-model";
import Plans from "../../cross-cutting/plans";
import {Dispatch, SetStateAction} from "react";
import SessionModel from "../models/session-model";
import {PaginateResponse} from "../models/response-model";

export default interface AppContextModel {
    productList    : PaginateResponse<Product[]>;
    setProductList : Dispatch<SetStateAction<PaginateResponse<Product[]>>>;
    plan           : Plans | undefined;
    setPlan        : Dispatch<SetStateAction<Plans | undefined>>;
    session        : SessionModel;
    setSession     : Dispatch<SetStateAction<SessionModel>>;
}