import Hero from "./components/hero";
import Downloads from "./components/downloads";
import Promo from "./components/promo";

export default function Store(){
    return <>
        <Hero/>
        <Downloads/>
        {/*<ListProducts title={"¡Novedades!"} data={data}/>*/}
        <Promo/>
        {/*<ListProducts title={"¡Promociones!"} data={data}/>*/}
    </>
}