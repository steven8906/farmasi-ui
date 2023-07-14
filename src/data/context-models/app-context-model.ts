import ProductModel from "../models/product-model";
import Plans from "../../cross-cutting/plans";
import {Dispatch, SetStateAction} from "react";

export default interface AppContextModel {
    productList : ProductModel[];
    plan        : Plans|undefined;
    setPlan     : Dispatch<SetStateAction<Plans|undefined>>;
}