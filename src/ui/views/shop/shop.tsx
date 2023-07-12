import ListProducts from "../../components/list-products";
import useShop from "./use-cases/useShop";
import useAppContext from "../../../application/use-cases/use-app-context";

export default function Shop(){
    const {sectionShop, setSectionShop} = useShop();
    const {productList}                 = useAppContext();

    return <>
        <div className={"d-flex justify-content-center align-items-center gap-3"}>
            <button className={`btn btn-link text-decoration-none ${sectionShop === 'MAQUILLAJE' ? 'text-primary font-bold': 'text-dark'}`}
                onClick={()=> setSectionShop('MAQUILLAJE')}>
                MAQUILLAJES
            </button>
            <span>|</span>
            <button className={`btn btn-link text-decoration-none ${sectionShop === 'FRAGANCIAS' ? 'text-primary font-bold': 'text-dark'}`}
                onClick={()=> setSectionShop('FRAGANCIAS')}>
                FRAGANCIAS
            </button>
            <span>|</span>
            <button className={`btn btn-link text-decoration-none ${sectionShop === 'CUIDADO_PIEL' ? 'text-primary font-bold': 'text-dark'}`}
                onClick={()=> setSectionShop('CUIDADO_PIEL')}>
                CUIDADO DE LA PIEL
            </button>
            <span>|</span>
            <button className={`btn btn-link text-decoration-none ${sectionShop === 'MERCH' ? 'text-primary font-bold': 'text-dark'}`}
                onClick={()=> setSectionShop('MERCH')}>
                MERCH
            </button>
        </div>
        <section className={"bg-primary-light"}>
            <div className={"container pt-5"}>
                { sectionShop === 'MAQUILLAJE' && <ListProducts title={"Maquillajes"} data={[...productList]}/>}
                { sectionShop === 'FRAGANCIAS' && <ListProducts title={"Fragancias"} data={[...productList, ...productList, ...productList]}/>}
                { sectionShop === 'CUIDADO_PIEL' && <ListProducts title={"Cuidado de la piel"} data={[...productList, ...productList, ...productList]}/>}
                { sectionShop === 'MERCH' && <ListProducts title={"Merch"} data={[...productList, ...productList, ...productList]}/>}
            </div>
        </section>
    </>
}