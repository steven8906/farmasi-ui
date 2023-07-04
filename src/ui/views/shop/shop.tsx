import ListProducts from "../../components/list-products";
import data from "../../../data/repository/products";
import useShop from "./use-cases/useShop";

export default function Shop(){
    const {sectionShop, setSectionShop} = useShop();

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
                <ListProducts title={"Maquillajes"} data={[...data, ...data, ...data]}/>
            </div>
        </section>
    </>
}