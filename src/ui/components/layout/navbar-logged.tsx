import LogoFarmasi from "../../../infrastructure/assets/img/logo-anaue.png";
import {useLocation, useNavigate} from "react-router-dom";
import RoutesPath from "../../../infrastructure/router/routes-path";
import "./navbar.scss";
import useLoginStore from "../../../application/store/use-login-store";
import SessionModel from "../../../data/models/session-model";
import useSession from "../../../application/use-cases/use-session";
import {currencyFormatter} from "../../../cross-cutting/utils";
import useBasketStore from "../../../application/store/use-basket-store";
import BasketStoreModel from "../../../data/models/basket-store-model";
import {Product} from "../../../data/models/product-model";

export default function NavbarLogged() {
    type StateType              = { session : SessionModel, setSession: (data: SessionModel) => void }
    type ProductBasketType      = ({ id: number, name: string, image: string | undefined, quantity: number })
    type BasketType             = { basket  : BasketStoreModel, setBasket: (basket: BasketStoreModel) => void }
    const navigate              = useNavigate();
    const {pathname}            = useLocation();
    const {session, setSession} = useLoginStore(state => state as StateType);
    const {basket, setBasket}   = useBasketStore(state => state) as unknown as BasketType;
    const {getPlan, checkPermission}             = useSession();

    function cleanBasket(products: Product[]): ProductBasketType[] {
        const copySet                 = new Set([...products]) as Set<Product>;
        const data: ProductBasketType[] = [];
        copySet.forEach(x => {
            const quantity = products.filter(prod => prod.id === x.id).length;
            const productBasket: ProductBasketType = {
                quantity,
                id: x.id,
                name: x.name,
                image: x.image
            };
            data.push(productBasket);
        });
        const dataReturn: ProductBasketType[] = [];
        data.forEach(x => {
            if (!dataReturn.some(ret => ret.id === x.id)) dataReturn.push(x)
        });
        return dataReturn;
    }

    function sum(products: Product[]):number {
        let total = 0;
        products.forEach(x => total+= parseFloat(x.price_a));
        return total;
    }

    return (<>
        <nav className="navbar navbar-expand-lg py-2">
            <div className={"w-85 d-flex m-auto pb-1"}>
                <div className="container-fluid w-50">
                    <a className="navbar-brand cursor-pointer__hover" onClick={()=> navigate(RoutesPath.HOME)}>
                        <img src={LogoFarmasi} alt="Logo" width="220" className="d-inline-block align-text-top"/>
                    </a>
                    <button className="navbar-toggler float-end" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <span className={"clearfix"}/>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <div className={"d-flex justify-content-end w-100 d-sm-block d-md-block d-lg-none"}>
                            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Link</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className={"justify-content-end align-items-center w-100 d-none d-lg-flex gap-3"}>
                    { pathname === RoutesPath.SHOP ? <div className="input-group flex-nowrap w-30 p-1 px-3 me-4"
                          style={{border: '1px solid #DBDBDB', borderRadius: '18px'}}>
                        <input type="text"
                               className="form-control border-0 p-0"
                               placeholder="Buscar producto."/>
                        <span className="input-group-text bg-white border-0 p-0">
                                <i className='bx bx-search-alt'/>
                            </span>
                    </div> : null}
                    <button type={"submit"}
                            className={"border-0 font-size-16 btn__alert"}
                            onClick={()=> navigate(RoutesPath.SHOP)}>Productos
                    </button>
                    <button type={"submit"}
                            className={"border-0 font-size-16 btn__alert"}
                            onClick={()=> navigate(RoutesPath.STORE)}>Tienda
                    </button>
                    { checkPermission('read:admin') ? <button type={"button"}
                             className={"btn btn-link"}
                             onClick={() => navigate(RoutesPath.ADMIN)}>Zona Admin
                    </button> : null}

                    {basket.products.length > 0 && <div className="dropdown">
                        <a className="btn btn-link dropdown-toggle" href="#" role="button"
                           data-bs-toggle="dropdown" aria-expanded="false">
                            <i className='bx bx-shopping-bag font-size-25 align-middle' style={{color: 'gray'}}/>
                            <span className="badge text-white bg-primary">{basket.products.length}</span>
                        </a>

                        <ul className="dropdown-menu">
                            {cleanBasket(basket.products).map((x, index) =>
                                <li key={`basket-${index}`} className={"d-flex justify-content-between align-items-center"}>
                                    <img src={`data:image/png;base64,${x.image}`} alt={"producto"} width={50}/>
                                    <span className={"dropdown-item"}>{x.quantity} - {x.name}</span>
                                </li>
                            )}
                            { basket.products.length > 0 && <li className={"text-center border-top"}>
                                <span className={"dropdown-item"}>
                                    <p className={"text-bold"}>Total productos: {currencyFormatter(sum(basket.products))}</p>
                                    <p className={"text-bold"}>Total crédito: -{currencyFormatter(getPlan())}</p>
                                    <p className={"text-bold border-top"}>Total compra: {currencyFormatter(sum(basket.products) - getPlan())}</p>
                                </span>
                            </li>}
                            <li className={"text-center border-top"}>
                                <button className={"dropdown-item"}
                                        type={"button"}
                                        onClick={()=> !(sum(basket.products) - getPlan() < 0) && navigate(`${RoutesPath.JOIN_NOW}/compra`)}>
                                    {(sum(basket.products) - getPlan() < 0) ? 'Debe completar su crédito para finalizar la compra' : 'Finalizar compra'}
                                </button>
                            </li>
                        </ul>
                    </div>}

                    <div className="dropdown">
                        <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown">
                            <span className={"align-middle"}>{session?.user?.user}</span>
                            { basket.products.length > 0 && <span className={"align-middle"}> - Crédito: {currencyFormatter(getPlan())}</span>}
                        </button>
                        <ul className="dropdown-menu">
                            <li>
                                <button className="dropdown-item"
                                        onClick={()=> {
                                            setSession({} as SessionModel);
                                            setBasket({ products: [] } as BasketStoreModel)
                                        }}
                                        type={"button"}>Cerrar Sesión
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </>)
}