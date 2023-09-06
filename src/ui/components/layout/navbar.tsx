import LogoFarmasi from "../../../infrastructure/assets/img/logo.png";
import {useNavigate} from "react-router-dom";
import RoutesPath from "../../../infrastructure/router/routes-path";
import "./navbar.scss";

export default function Navbar() {
    const navigate = useNavigate();

    return (<>
        <nav className="navbar navbar-expand-lg bg-body-tertiary py-2">
            <div className={"w-85 d-flex m-auto pb-1"}>
                <div className="container-fluid">
                    <a className="navbar-brand cursor-pointer__hover" onClick={() => navigate(RoutesPath.HOME)}>
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

                <div className={"justify-content-end align-items-center w-100 d-none d-lg-flex"}>
                    <button className={"btn font-size-16"} onClick={() => navigate(RoutesPath.SHOP)}>Productos</button>
                    <a className={"font-size-16 btn__alert"}
                       onClick={() => navigate(RoutesPath.PLANS)}>
                        ¡Comienza gratis!
                    </a>
                    <button className={"btn font-size-16"} onClick={() => navigate(RoutesPath.PLANS)}>Precios</button>
                    <button className={"btn font-size-16"}
                            onClick={() => navigate(RoutesPath.LOGIN)}>
                        Ingresar
                    </button>
                </div>
            </div>
        </nav>
    </>)
}