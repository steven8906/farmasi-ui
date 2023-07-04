import LogoFarmasi from "../../../infrastructure/assets/img/logo.png";
import {useNavigate} from "react-router-dom";
import RoutesPath from "../../../infrastructure/router/routes-path";
import "./navbar.scss";

export default function NavbarLogged() {
    const navigate = useNavigate();

    return (<>
        <nav className="navbar navbar-expand-lg py-2">
            <div className={"w-85 d-flex m-auto pb-1"}>
                <div className="container-fluid w-50">
                    <a className="navbar-brand cursor-pointer__hover" onClick={()=> navigate(RoutesPath.HOME)}>
                        <img src={LogoFarmasi} alt="Logo" width="120" className="d-inline-block align-text-top"/>
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
                    <div className="input-group flex-nowrap w-30 p-1 px-3 me-4"
                         style={{ border:'1px solid #DBDBDB', borderRadius:'18px' }}>
                        <input type="text" className="form-control border-0 p-0" placeholder="Buscar producto." />
                        <span className="input-group-text bg-white border-0 p-0">
                                <i className='bx bx-search-alt'/>
                            </span>
                    </div>
                    <a className={"font-size-16 btn__alert px-5"}  onClick={()=> navigate(RoutesPath.SHOP)}>Tienda</a>
                    <button className={"btn font-size-16"}>
                        <i className='bx bx-shopping-bag font-size-25 me-3 align-middle' style={{color:'gray'}}/>
                        <span className={"align-middle"}>Yoli Caballero</span>
                    </button>
                </div>
            </div>
        </nav>
    </>)
}