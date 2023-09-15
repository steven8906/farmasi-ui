import CardProduct from "./card-product";
import {Product} from "../../data/models/product-model";
import {PaginateResponse} from "../../data/models/response-model";
import SectionShopType from "../../data/types/section-shop-type";

interface Props {
    title      : string;
    data       : PaginateResponse<Product[]>;
    type       : SectionShopType;
    setPage    : (type: SectionShopType, page: number) => void
    sizePages? : number;
}

export default function ListProducts({title, data, sizePages = 12, setPage, type}: Props) {

    return <>
        {data.paginate ?
            <section className={"bg-primary-light p-3"}>
                <div className={"container"}>
                    <h1 className={"font-bold"}>{title}</h1>
                    <div className={"row justify-content-evenly my-5"}>
                        {data.paginate.data.map((x, index) =>
                            <div className={"col-sm-12 col-md-8 col-lg-3 mb-3"} key={`news-${index}`}>
                                <CardProduct image={x.image}
                                             name={x.name}
                                             currentValue={x.price_a}
                                             product={x}
                                             before_price={x.before_price}/>
                            </div>)}
                    </div>
                    <div className={"d-flex justify-content-center mb-5"}>
                        <nav>
                            <ul className="pagination">
                                <li className="page-item">
                                    <button className="page-link border-primary bg-primary text-white border-radius-10"
                                            type={"button"}
                                            onClick={() => setPage(type, data.paginate.current_page - 1)}>Atrás
                                    </button>
                                </li>
                                {new Array(Math.ceil(data.paginate.total / sizePages)).fill(null).map((_, index) =>
                                    <li className="page-item mx-2"
                                        key={`page-${index}`}>
                                        <button
                                            className={`page-link border-primary bg-primary-light border-radius-10 ${data.paginate.current_page === index + 1 ? 'bg-primary text-white' : ''}`}
                                            onClick={() => setPage(type, index + 1)}>
                                            {index + 1}
                                        </button>
                                    </li>)}
                                <li className="page-item mx-2">
                                    <button className="page-link bg-primary text-white border-primary border-radius-10"
                                            onClick={() => setPage(type, data.paginate.current_page + 1)}>Adelante
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </section> :
            <p className={"pb-5"}>Cargando...</p>}
    </>
}