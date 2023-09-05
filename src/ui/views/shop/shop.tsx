import ListProducts from "../../components/list-products";
import useShop from "./use-cases/use-shop";
import SectionShopType from "../../../data/types/section-shop-type";

export default function Shop() {
    const {sectionShop, productList, setSectionShop, setPage} = useShop();
    const checkType = (type: SectionShopType) => sectionShop === type && typeof productList !== 'undefined';

    return <>
        <div className={"d-flex justify-content-center align-items-center gap-3"}>
            <button
                className={`btn btn-link text-decoration-none ${sectionShop === 'MAQUILLAJE' ? 'text-primary font-bold' : 'text-dark'}`}
                onClick={() => {
                    setSectionShop('MAQUILLAJE');
                    setPage('MAQUILLAJE', 1);
                }}>
                MAQUILLAJES
            </button>
            <span>|</span>
            <button
                className={`btn btn-link text-decoration-none ${sectionShop === 'FRAGANCIAS' ? 'text-primary font-bold' : 'text-dark'}`}
                onClick={() => {
                    setSectionShop('FRAGANCIAS');
                    setPage('FRAGANCIAS', 1);
                }}>
                FRAGANCIAS
            </button>
            <span>|</span>
            <button
                className={`btn btn-link text-decoration-none ${sectionShop === 'CUIDADO_PIEL' ? 'text-primary font-bold' : 'text-dark'}`}
                onClick={() => {
                    setSectionShop('CUIDADO_PIEL');
                    setPage('CUIDADO_PIEL', 1);
                }}>
                CUIDADO DE LA PIEL
            </button>
            <span>|</span>
            <button
                className={`btn btn-link text-decoration-none ${sectionShop === 'MERCH' ? 'text-primary font-bold' : 'text-dark'}`}
                onClick={() => {
                    setSectionShop('MERCH');
                    setPage('MERCH', 1);
                }}>
                MERCH
            </button>
        </div>
        <section className={"bg-primary-light"}>
            <div className={"container pt-5"}>
                {checkType('MAQUILLAJE') && <ListProducts title={"Maquillajes"}
                                                          type={'MAQUILLAJE'}
                                                          setPage={setPage}
                                                          data={productList}/>}
                {checkType('FRAGANCIAS') && <ListProducts title={"Fragancias"}
                                                          type={'FRAGANCIAS'}
                                                          setPage={setPage}
                                                          data={productList}/>}
                {checkType('CUIDADO_PIEL') && <ListProducts title={"Cuidado de la piel"}
                                                            type={'CUIDADO_PIEL'}
                                                            setPage={setPage}
                                                            data={productList}/>}
                {checkType('MERCH') && <ListProducts title={"Merch"}
                                                     type={'MERCH'}
                                                     setPage={setPage}
                                                     data={productList}/>}
            </div>
        </section>
    </>
}