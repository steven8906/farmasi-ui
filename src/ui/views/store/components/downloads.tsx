import BookOne from "../../../../infrastructure/assets/img/book-1.png";
import BookTwo from "../../../../infrastructure/assets/img/book-2.png";

export default function Downloads(){
    return <>
        <section className={"bg-primary-light"}>
            <div className={"d-flex flex-wrap container justify-content-center py-5 gap-5"}>
                <div className={"d-flex align-items-center"}>
                    <div>
                        <img src={BookOne} alt={""} width={250}/>
                    </div>
                    <div className={"d-flex flex-column align-items-center"}>
                        <button className={"btn btn-primary text-white font-semi-bold px-5"}>
                            <span className={"align-middle"}>Descargar</span>
                            <i className='bx bxs-download align-middle'/>
                        </button>
                        <p className={"text-dark font-regular"}>Catálogo Digital</p>
                        <p className={"text-dark font-light"}>Edic. 01</p>
                    </div>
                </div>
                <div className={"d-flex align-items-center"}>
                    <div>
                        <img src={BookTwo} alt={""} width={250}/>
                    </div>
                    <div className={"d-flex flex-column align-items-center"}>
                        <button className={"btn btn-primary text-white font-semi-bold px-5"}>
                            <span className={"align-middle"}>Descargar</span>
                            <i className='bx bxs-download align-middle'/>
                        </button>
                        <p className={"text-dark font-regular"}>Guia de Oportunidades</p>
                        <p className={"text-dark font-light"}>Revista</p>
                    </div>
                </div>
            </div>
        </section>
    </>
}