import {useNavigate} from "react-router-dom";
import routesPath from "../../../../infrastructure/router/routes-path";

export default function Confirmation() {
    const navigate    = useNavigate();

    return (
        <>
            <section>
                <h1 className={"font-bold font-size-40 text-center"}>¡Pedido confirmado!</h1>
                <div className={"container"}>
                    <article className={"w-40 m-auto"}>
                        <p className={"text-center text-primary font-semi-bold font-size-22"}>
                            ¡Felicitaciones ya eres una
                            Beauty Influencer! Bienvenid@ a la familia FARMASI.
                        </p>
                        <br/>
                        <p className={"text-center font-regular font-size-14"}>
                            Inicia sesión y empieza tu emprendimiento.
                        </p>
                    </article>
                    <br/>
                    <button className={"btn btn-primary d-block m-auto text-white font-semi-bold px-5"}
                            onClick={() => navigate(routesPath.LOGIN)}>
                        Iniciar sesión
                    </button>
                    <br/>
                    <br/>
                    <br/>
                </div>
            </section>
        </>
    )
}