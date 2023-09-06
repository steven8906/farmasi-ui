import useAdmin from "./use-cases/use-admin";
import {Avatar} from "@mui/material";
import ModalChangeImage from "./components/modal-change-image";

export default function Admin() {
    const {products, setState, onChange, search, getProducts} = useAdmin();
    return <>
        <section className={"container my-5"}>
            <h1>Listado de productos</h1>
            <hr/>
            <br/>
            {products?.paginate?.data &&
                <>
                    <label>Buscador:</label>
                    <input className={"form-control w-50"}
                           name={'product'}
                           onChange={onChange}
                           onKeyUp={search}
                           placeholder={"Buscar producto aquí..."}/>
                    <br/>
                    <br/>
                    <table className="table table-bordered">
                        <thead>
                        <tr>
                            <th scope="col">Código</th>
                            <th scope="col">Producto</th>
                            <th scope="col">Imagen</th>
                        </tr>
                        </thead>
                        <tbody>
                        {products.paginate.data.map((x, index) => (
                            <tr key={`product-${index}`}>
                                <th scope="row">{x.cod}</th>
                                <td>{x.name}</td>
                                <td className={"d-flex justify-content-center"}>
                                    <ModalChangeImage product={x} callback={()=> getProducts('ALL', products?.paginate.current_page)}>
                                        <Avatar alt={x.name}
                                                src={`data:image/jpeg;base64, ${x.image}`}
                                                sx={{width: 56, height: 56}}/>
                                    </ModalChangeImage>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    <div className={"d-flex justify-content-center my-5"}>
                        <nav>
                            <ul className="pagination">
                                <li className="page-item">
                                    <button className="page-link border-primary bg-primary text-white border-radius-10"
                                            type={"button"}
                                            onClick={() => setState(products?.paginate.current_page - 1)}>Atrás
                                    </button>
                                </li>
                                {new Array(Math.ceil(products.paginate.total / 12)).fill(null).map((_, index) =>
                                    <li className="page-item mx-2"
                                        key={`page-${index}`}>
                                        <button
                                            className={`page-link border-primary bg-primary-light border-radius-10 ${!(products) || products.paginate.current_page === index + 1 ? 'bg-primary text-white' : ''}`}
                                            onClick={() =>  setState(index + 1)}>
                                            {index + 1}
                                        </button>
                                    </li>)}
                                <li className="page-item mx-2">
                                    <button className="page-link bg-primary text-white border-primary border-radius-10"
                                            onClick={() =>  setState(products?.paginate.current_page + 1)}>Adelante
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </>}
            <br/>
        </section>
    </>
}