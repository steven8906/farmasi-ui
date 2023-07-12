import CardProduct from "./card-product";
import ProductModel from "../../data/models/product-model";
import {useEffect, useState} from "react";

interface Props {
    title      : string;
    data       : ProductModel[];
    sizePages? : number;
}

export default function ListProducts({title, data, sizePages = 12}: Props) {
    const [dataPaginated, setDataPaginated] = useState<ProductModel[]>([...data]);

    useEffect(() => {
        paginate();
    }, [])

    const paginate = (page = 1): void => setDataPaginated(filterData<ProductModel>([...data], page, sizePages as number));

    function filterData<T>(data: Array<T>, currentPage: number, pageSize: number): Array<T> {
        return data.filter((item, i) => i < currentPage * pageSize && i >= (currentPage * pageSize) - pageSize);
    }

    return <>
        <section className={"bg-primary-light p-3"}>
            <div className={"container"}>
                <h1 className={"font-bold"}>{title}</h1>
                <div className={"row justify-content-evenly my-5"}>
                    {dataPaginated.map((x, index) =>
                        <div className={"col-sm-12 col-md-8 col-lg-3 mb-3"} key={`news-${index}`}>
                            <CardProduct imgPath={x.imgPath}
                                         name={x.name}
                                         beforeValue={x.beforeValue}
                                         currentValue={x.currentValue}/>
                        </div>)}
                </div>
                <div className={"d-flex justify-content-center mb-5"}>
                    <nav>
                        <ul className="pagination">
                            <li className="page-item">
                                <a className="page-link border-primary bg-primary text-white border-radius-10"
                                   href="#">Atrás</a>
                            </li>
                            {new Array(Math.ceil(data.length / sizePages)).fill(null).map((_, index) =>
                                <li className="page-item mx-2"
                                    key={`page-${index}`}>
                                    <button className="page-link border-primary bg-primary-light border-radius-10"
                                        onClick={()=> paginate(index + 1)}>
                                        {index + 1}
                                    </button>
                                </li>)}
                            <li className="page-item mx-2">
                                <a className="page-link bg-primary text-white border-primary border-radius-10"
                                   href="#">Adelante</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </section>
    </>
}