import {useNavigate} from "react-router-dom";
import RoutesPath from "../../../infrastructure/router/routes-path.ts";

export default function Footer() {
    const navigate = useNavigate();
    return (
        <>
            <footer>
                <div className={"bg-primary p-2"}>
                    <div className={"container"}>
                        <h5 className={"text-white font-semi-bold m-0"}>¡Mantente social!</h5>
                    </div>
                </div>

                <div className={"bg-secondary w-100"}>
                    <div className={"container"}>
                        <div className={"row justify-content-between p-3"}>
                            <div className={"col-sm-12 col-md-4 d-flex flex-column"}>
                                <p className={"text-decoration-none text-dark font-medium"}>POLÍTICAS DE LA COMPAÑÍA</p>
                                <button className={"btn text-decoration-none text-dark font-light"}
                                    onClick={()=> navigate(RoutesPath.PRIVACY_POLICIES)}>
                                    Políticas de privacidad ANAUE
                                </button>
                            </div>
                            <div className={"col-sm-12 col-md-4 d-flex flex-column"}>
                                <p className={"text-decoration-none text-dark font-medium"}>ACERCA DE LA COMPAÑÍA</p>
                                <button className={"btn text-decoration-none text-dark font-light"}
                                        onClick={()=> navigate(RoutesPath.MISSION_VISION)}>
                                    Misión y visión
                                </button>
                            </div>
                            <div className={"col-sm-12 col-md-4 d-flex flex-column"}>
                                <p className={"text-decoration-none text-dark font-medium"}>OPERATIVO</p>
                                <button className={"btn text-decoration-none text-dark font-light"}
                                        onClick={()=> navigate(RoutesPath.PAYMENT_METHOD)}>
                                    Método de pago
                                </button>
                                <button className={"btn text-decoration-none text-dark font-light"}
                                        onClick={()=> navigate(RoutesPath.SHIPPING)}>
                                    Entrega
                                </button>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className={"container"}>
                        <p>FARMASI © Reservado todos los derechos</p>
                        <br/>
                    </div>
                </div>
            </footer>
        </>
    )
}
