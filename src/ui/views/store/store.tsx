import Hero from "./components/hero";
import Downloads from "./components/downloads";
import ListProducts from "../../components/list-products";
import Promo from "./components/promo";
import data from "../../../data/repository/products";

export default function Store(){
    return <>
        <Hero/>
        <Downloads/>
        <ListProducts title={"¡Novedades!"} data={data}/>
        <Promo/>
        <ListProducts title={"¡Promociones!"} data={data}/>
    </>
}