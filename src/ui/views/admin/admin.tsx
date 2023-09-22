import useAdmin from "./use-cases/use-admin";
import {Avatar} from "@mui/material";
import ModalChangeImage from "./components/modal-change-image";
import BannerAdmin from "./components/banner-admin";
import DownloadsAdmin from "./components/downloads-admin";
import {useEffect} from "react";

export default function Admin() {
    const {
        products,
        formDataBank,
        formDataBanner,
        formDataDownloads,
        setState,
        saveBank,
        onChange,
        search,
        getProducts,
        getConfig,
        onFormBankChange,
        getHeaderAuth,
        onChangeCategory,
    } = useAdmin();

    useEffect(()=> {
        getConfig();
    }, [])

    return <>
        <div className="accordion w-75 my-5 m-auto" id="accordion-config">
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse-products">
                        Productos
                    </button>
                </h2>
                <div id="collapse-products"
                     className="accordion-collapse collapse"
                     data-bs-parent="#accordion-config">
                    <div className="accordion-body">
                        <section className={"container my-5"}>
                            <h1>Listado de productos</h1>
                            <hr/>
                            <br/>
                            {products?.paginate?.data &&
                                <>
                                    <div className={"w-50"}>
                                        <label className={"form-label"}>Buscador:</label>
                                        <input className={"form-control"}
                                               name={'product'}
                                               onChange={onChange}
                                               onKeyUp={search}
                                               placeholder={"Buscar producto aquí..."}/>
                                    </div>
                                    <br/>
                                    <br/>
                                    <table className="table table-bordered">
                                        <thead>
                                        <tr>
                                            <th scope="col">Código</th>
                                            <th scope="col">Producto</th>
                                            <th scope="col">Categoría</th>
                                            <th scope="col">Imagen</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {products.paginate.data.map((x, index) => (
                                            <tr key={`product-${index}`}>
                                                <th scope="row">{x.cod}</th>
                                                <td>{x.name}</td>
                                                <td>
                                                    <select className={"form-select"}
                                                            value={x.category}
                                                            onChange={ev => onChangeCategory(ev, x)}
                                                            name={"category"}>
                                                        <option value={"ALL"}>All</option>
                                                        <option value={"MAQUILLAJE"}>Maquillaje</option>
                                                        <option value={"CUIDADO_PIEL"}>Cuidado de la piel</option>
                                                        <option value={"MERCH"}>Merch</option>
                                                    </select>
                                                </td>
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
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse-data-banks">
                        Datos bancarios
                    </button>
                </h2>
                <div id="collapse-data-banks"
                     className="accordion-collapse collapse"
                     data-bs-parent="#accordion-config">
                    <div className="accordion-body">
                        <form className={"row"} onSubmit={ev => {
                            ev.preventDefault();
                        }}>
                            <div className="mb-3 col-sm-12 col-md-6">
                                <label className="form-label">Nombre del banco:</label>
                                <input type="text"
                                       className="form-control"
                                       name={"name_bank"}
                                       onChange={onFormBankChange}
                                       required
                                       value={formDataBank.name_bank as never ?? "" as string}
                                       placeholder="Ingrese el nombre de su banco..."/>
                            </div>
                            <div className="mb-3 col-sm-12 col-md-6">
                                <label className="form-label">Nombre del titular de la cuenta:</label>
                                <input type="text"
                                       className="form-control"
                                       name={"name_owner_account_bank"}
                                       onChange={onFormBankChange}
                                       required
                                       value={formDataBank.name_owner_account_bank as never ?? "" as string}
                                       placeholder="Nombre del titular de la cuenta..."/>
                            </div>
                            <div className="mb-3 col-sm-12 col-md-6">
                                <label className="form-label">Número de cuenta:</label>
                                <input type="text"
                                       className="form-control"
                                       name={"number_account_bank"}
                                       onChange={onFormBankChange}
                                       required
                                       value={formDataBank.number_account_bank as never ?? "" as string}
                                       placeholder="Ingrese el número de cuenta..."/>
                            </div>
                            <div className="mb-3 col-sm-12 col-md-6">
                                <label className="form-label">Tipo de cuenta:</label>
                                <select className="form-select"
                                        onChange={onFormBankChange}
                                        value={formDataBank.type_account_bank as never ?? "" as string}
                                        name={'type_account_bank'}
                                        required>
                                    <option value="">Seleccione...</option>
                                    <option value="CUENTA CORRIENTE">CUENTA CORRIENTE</option>
                                    <option value="CUENTA DE AHORROS">CUENTA DE AHORROS</option>
                                </select>
                            </div>
                            <div className={"d-flex justify-content-end"}>
                                <button className="btn btn-primary text-white w-25"
                                        type={"button"}
                                        onClick={saveBank}>Guardar datos bancarios
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse-banners">
                        Banner's (Publicidad)
                    </button>
                </h2>
                <div id="collapse-banners"
                     className="accordion-collapse collapse"
                     data-bs-parent="#accordion-config">
                    <div className="accordion-body">
                        <BannerAdmin dataBanner={formDataBanner}
                                     refreshData={getConfig}
                                     getHeaderAuth={getHeaderAuth}/>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse-downloads">
                        Descargas
                    </button>
                </h2>
                <div id="collapse-downloads"
                     className="accordion-collapse collapse"
                     data-bs-parent="#accordion-config">
                    <div className="accordion-body">
                        <DownloadsAdmin dataDownloads={formDataDownloads}
                                        refreshData={getConfig}
                                        getHeaderAuth={getHeaderAuth}/>
                    </div>
                </div>
            </div>
        </div>
    </>
}