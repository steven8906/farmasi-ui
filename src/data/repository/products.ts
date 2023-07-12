import ProductModel from "../models/product-model";
import KitOne from "../../infrastructure/assets/img/kit-1.png";
import KitTwo from "../../infrastructure/assets/img/kit-2.png";

const data: ProductModel[] = [
    {imgPath: KitOne, name: 'Brillo Labial Nude - 4ml', currentValue: 15000, beforeValue: 35000},
    {imgPath: KitTwo, name: 'Polvo Matte - 10 Gr', currentValue: 20000, beforeValue: null},
    {imgPath: KitTwo, name: 'Delineador Express - 5 Gr', currentValue: 27000, beforeValue: 35000},
    {imgPath: KitTwo, name: 'Color Control - 4ml', currentValue: 18000, beforeValue: 35000},
    {imgPath: KitTwo, name: 'Color Control - 4ml2', currentValue: 18000, beforeValue: 35000},
]

export default data;