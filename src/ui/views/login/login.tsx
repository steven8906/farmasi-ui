import "./styles/_login.scss";
import LogoFarmasi from "../../../infrastructure/assets/img/logo.png";
import {useNavigate} from "react-router-dom";
import routesPath from "../../../infrastructure/router/routes-path";

export default function Login() {

    const navigate = useNavigate();

    return (
        <main className={"bg-primary-light"}>
            <section className={"row justify-content-center align-items-center h-100 container m-auto"}>
                <div className={"col-sm-12 col-md-4 m-auto p-5"}>
                    <img src={LogoFarmasi} className={"d-block w-100"} alt={"Logo"}/>
                    <br/>
                    <p>Serás parte de una comunidad de Beauty Influencers, una comunidad de cientos de miles de personas
                        que trabajan para cambiar vidas.</p>
                </div>
                <div className={"col-sm-12 col-md-4 m-auto"}>
                    <div className="card border-0 shadow p-1">
                        <div className="card-body">
                            <form>
                                <div className={"mb-3"}>
                                    <input className={"form-control p-3"} placeholder={"Correo electrónico"}/>
                                </div>
                                <div className={"mb-3"}>
                                    <input className={"form-control p-3"} placeholder={"Contraseña"}/>
                                </div>
                                <div className={"mb-3"}>
                                    <button className={"btn btn-primary text-white w-100 font-bold"}
                                            onClick={() => navigate(routesPath.STORE)}>Iniciar Sesión
                                    </button>
                                </div>
                                <a href={"#"} className={"text-primary text-decoration-none text-center d-block"}>¿Olvidaste
                                    tu contraseña?</a>
                                <hr/>
                                <div className={"mt-4 text-center"}>
                                    <button className={"btn btn-success py-0 text-white"}
                                            onClick={() => navigate(routesPath.STORE)}>Crear cuenta nueva
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}