import React, {useEffect, useState} from "react";

interface Props {
    data       : React.ReactNode[];
    sizePages? : number;
}

export default function Pagination({data, sizePages = 12}:Props) {
    const [dataPaginated, setDataPaginated] = useState<React.ReactNode[]>(data);
    const [currentPage, setCurrentPage]     = useState<number>(1);

    useEffect(() => {
        paginate();
    }, [])

    function paginate(pageNumber = 1): void {
        setDataPaginated(filterData<React.ReactNode>([...data], pageNumber, sizePages as number));
        setCurrentPage(pageNumber);
    }

    function filterData<T>(data: Array<T>, currentPage: number, pageSize: number): Array<T> {
        return data.filter((item, i) => i < currentPage * pageSize && i >= (currentPage * pageSize) - pageSize);
    }

    return <>
        {dataPaginated.map((x, index) => <React.Fragment key={`data-fragment-paginated-${index}`}>{x}</React.Fragment>)}
        <div className={"d-flex justify-content-center"}>
            <ul className="pagination">
                <li className="page-item">
                    <button type={"button"}
                            onClick={()=> paginate(1)}
                            className="page-link border-primary bg-primary text-white border-radius-10">
                        Atrás
                    </button>
                </li>
                {new Array(Math.ceil(data.length / sizePages)).fill(null).map((_, index) =>
                    <li className="page-item mx-2"
                        key={`page-${index}`}>
                        <button className={`page-link border-primary border-radius-10 ${currentPage === index + 1 ? 'bg-primary text-white' : 'bg-primary-light'}`}
                                onClick={() => paginate(index + 1)}>
                            {index + 1}
                        </button>
                    </li>)}
                <li className="page-item mx-2">
                    <button type={"button"}
                            onClick={()=> paginate(Math.ceil(data.length / sizePages))}
                            className="page-link bg-primary text-white border-primary border-radius-10">
                        Adelante
                    </button>
                </li>
            </ul>
        </div>
    </>
}