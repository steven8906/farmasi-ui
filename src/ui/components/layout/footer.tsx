export default function Footer() {
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
                                <a href={"#"} className={"text-decoration-none text-dark font-medium"}>POLÍTICAS DE LA COMPAÑÍA</a>
                                <a href={"#"} className={"text-decoration-none text-dark font-light"}>Políticas y procedimientos</a>
                                <a href={"#"} className={"text-decoration-none text-dark font-light"}>Política de prueba en animales</a>
                            </div>
                            <div className={"col-sm-12 col-md-4 d-flex flex-column"}>
                                <a href={"#"} className={"text-decoration-none text-dark font-medium"}>ACERCA DE LA COMPAÑÍA</a>
                                <a href={"#"} className={"text-decoration-none text-dark font-light"}>Misión y visión</a>
                                <a href={"#"} className={"text-decoration-none text-dark font-light"}>Sobre nosotros</a>
                            </div>
                            <div className={"col-sm-12 col-md-4 d-flex flex-column"}>
                                <a href={"#"} className={"text-decoration-none text-dark font-medium"}>OPORTUNIDAD Y SOPORTE</a>
                                <a href={"#"} className={"text-decoration-none text-dark font-light"}>Guía de OporTunadades</a>
                                <a href={"#"} className={"text-decoration-none text-dark font-light"}>Contáctanos</a>
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