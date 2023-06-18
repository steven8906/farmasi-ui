import "../styles/_hero.scss";
import {useNavigate} from "react-router-dom";
import RoutesPath from "../../../../infrastructure/router/routes-path";

export default function Hero() {
    const navigate = useNavigate();
    return (<>
        <section className={"hero__main text-center pt-6-rem"}>
            <article className={"d-block w-60 m-auto mt-50"}>
                <h1>¡Inicia tu emprendimiento y empiza a ganar ya!</h1>
                <h5>Incrementa tus ingresos hoy.</h5>
            </article>
            <div className={"hero__main-start-free"}>
                <img className={"d-block"} alt={""} src={"https://blog.cosmeticosalpormayor.com/hs-fs/hubfs/Tu-negocio-de-cosmeticos-blog.png?width=400&name=Tu-negocio-de-cosmeticos-blog.png"}/>
                <a className={"bg-primary text-white font-size-24"} onClick={()=> navigate(RoutesPath.PLANS)}>Comienza gratis</a>
                <img className={"d-block"} alt={""} src={"https://blog.cosmeticosalpormayor.com/hs-fs/hubfs/Tu-negocio-de-cosmeticos-blog.png?width=400&name=Tu-negocio-de-cosmeticos-blog.png"}/>
            </div>
            <br/>
            <br/>
            <br/>
            <div className={"hero__main-button-bar d-flex justify-content-between"}>
                <div className={"w-25 d-flex justify-content-center align-items-center"}>
                    <i className='bx bx-check font-size-52 text-primary'/>
                    <p className={"font-size-1-rem text-bold"}>Gana más dinero.</p>
                </div>
                <div className={"w-25 d-flex justify-content-center align-items-center"}>
                    <i className='bx bx-check font-size-52 text-primary'/>
                    <p className={"font-size-1-rem text-bold"}>Sé tu propio Jefe.</p>
                </div>
                <div className={"w-25 d-flex justify-content-center align-items-center"}>
                    <i className='bx bx-check font-size-52 text-primary'/>
                    <p className={"font-size-1-rem text-bold"}>Ten tu propio negocio.</p>
                </div>
                <div className={"w-25 d-flex justify-content-center align-items-center"}>
                    <i className='bx bx-check font-size-52 text-primary'/>
                    <p className={"font-size-1-rem text-bold"}>Trabaja desde casa.</p>
                </div>
            </div>
        </section>
    </>)
}