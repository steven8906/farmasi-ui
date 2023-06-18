import "./styles/_plans.scss";
import visaLogo from "../../../infrastructure/assets/img/visa.png";
import masterCardLogo from "../../../infrastructure/assets/img/master-card.png";
import tigoMonetLogo from "../../../infrastructure/assets/img/tigo-money.png";
import billeteraPersonalLogo from "../../../infrastructure/assets/img/billetera-personal.png";
import {useNavigate} from "react-router-dom";
import RoutesPath from "../../../infrastructure/router/routes-path";

export default function Plans() {
    const navigate = useNavigate();

    return (
        <>
            <section className={"plans__main"}>
                <div className={"container py-5"}>
                    <h1 className={"font-semi-bold text-center text-white"}>Seleciona tu plan.</h1>
                    <br/>
                    <br/>
                    <div className={"row justify-content-between"}>
                        <div className={"col-sm-12 col-md-6 col-lg-4"}>
                            <a className={"text-decoration-none cursor-pointer__hover"}>
                                <div className={"plans__card plans__card-bg-standard"}>
                                    <h3 className={"text-center font-semi-bold"}>(RF) REVENDEDORA FARMASI</h3>
                                    <br/>
                                    <br/>
                                    <p className={"text-center font-regular font-size-20"}>Dile SÍ a tu propio
                                        negocio.</p>
                                    <img className={"w-50 d-block m-auto pt-5-rem pb-3-rem"} alt={""}
                                         src={"https://farmasi.com.ro/wp-content/uploads/2020/12/CatalogFarmasi2021.png"}/>
                                    <div className={"d-flex flex-column w-75 m-auto"}>
                                        <hr/>
                                        <br/>
                                        <p className={"font-regular font-size-12"}>Inversión:</p>
                                        <p className={"font-bold font-size-30 plans__card-gs"}>Gs. 0</p>
                                        <br/>
                                        <br/>
                                        <article className={"font-regular font-size-12"}>
                                            * Con tu primera compra mínima de Gs. 150.000 te llevas un catálogo físico
                                            totalmente ¡GRATIS! <br/> <br/> Mas adelante puedes acceder a los desafíos y
                                            promociones
                                            especiales cambiando tu plan a uno de pago.
                                        </article>
                                        <br/>
                                        <button className={"btn bg-white text-dark border-radius-25"} onClick={()=> navigate(RoutesPath.JOIN_NOW)}>
                                            <span className={"font-regular text-bold font-size-22"}>¡Únete ahora!</span>
                                        </button>
                                        <br/>
                                        <br/>
                                        <hr/>
                                        <p className={"font-regular font-size-20 text-center px-5"}><b>20%</b> De
                                            ganancia
                                            sobre el catálogo.</p>
                                        <hr/>
                                        <div className={"d-flex align-items-center gap-3"}>
                                            <i className='bx bx-check font-size-22 text-bold'
                                               style={{color: 'yellow'}}/>
                                            <p>Catálogo digital.</p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className={"col-sm-12 col-md-6 col-lg-4"}>
                            <a className={"text-decoration-none cursor-pointer__hover"}>
                                <div className={"plans__card plans__card-bg-standard"}>
                                    <h3 className={"text-center font-semi-bold"}>(CI) CONSULTORA INDEPENDIENTE</h3>
                                    <br/>
                                    <br/>
                                    <p className={"text-center font-regular font-size-20"}>Revendedoras ilimitadas. Dile
                                        SÍ
                                        a tu propio negocio.</p>
                                    <img className={"w-50 d-block m-auto pt-2-rem pb-3-rem"} alt={""}
                                         src={"https://i-love-farmasi.com/cdn/shop/collections/Farmasi_Lip_Products.png?v=1669677659&width=1500"}/>
                                    <div className={"d-flex flex-column w-75 m-auto"}>
                                        <hr/>
                                        <br/>
                                        <p className={"font-regular font-size-12"}>Inversión:</p>
                                        <p className={"font-bold font-size-30 plans__card-gs"}>Gs. 350.000</p>
                                        <p className={"font-regular font-size-12"}>Valor en productos:</p>
                                        <p className={"font-bold font-size-30 plans__card-gs"}>Gs. 800.000</p>
                                        <p className={"font-regular font-size-12"}>¡Ganancia!</p>
                                        <p className={"font-bold font-size-40 plans__card-winner"}>Gs. 450.000</p>
                                        <br/>
                                        <br/>
                                        <button className={"btn bg-white text-dark border-radius-25"} onClick={()=> navigate(RoutesPath.JOIN_NOW)}>
                                            <span className={"font-regular text-bold font-size-22"}>¡Únete ahora!</span>
                                        </button>
                                        <br/>
                                        <br/>
                                        <hr/>
                                        <p className={"font-regular font-size-20 text-center px-5"}><b>30%</b> De
                                            ganancia
                                            sobre el catálogo.</p>
                                        <hr/>
                                        <h5 className={"font-semi-bold"}>Kit de inicio:</h5>
                                        <br/>
                                        <div className={"d-flex align-items-center gap-3"}>
                                            <i className='bx bx-check font-size-22 text-bold'
                                               style={{color: 'yellow'}}/>
                                            <p>7 productos originales:</p>
                                        </div>
                                        <br/>
                                        <ul className="list-unstyled ms-5">
                                            <li className="list-group-item">1 Rimel 4 gr Eyebrow Lash</li>
                                            <li className="list-group-item">1 Rilmel Lash Extend</li>
                                            <li className="list-group-item">1 Base VFX Pro 10 gr</li>
                                            <li className="list-group-item">1 Fragancia Omnia 50 ml</li>
                                            <li className="list-group-item">1 Brillo labial Farmasi</li>
                                            <li className="list-group-item">1 Pack de Toallitas Farmasi</li>
                                            <li className="list-group-item">1 Time Locker Spray 100 ml</li>
                                        </ul>
                                        <div className={"d-flex align-items-center gap-3"}>
                                            <i className='bx bx-check font-size-22 text-bold'
                                               style={{color: 'yellow'}}/>
                                            <p>2 Catálogos físicos.</p>
                                        </div>
                                        <div className={"d-flex align-items-center gap-3"}>
                                            <i className='bx bx-check font-size-22 text-bold'
                                               style={{color: 'yellow'}}/>
                                            <p>1 Revista Mujeres Exitosas.</p>
                                        </div>
                                        <div className={"d-flex align-items-center gap-3"}>
                                            <i className='bx bx-check font-size-22 text-bold'
                                               style={{color: 'yellow'}}/>
                                            <p> Desafíos y sorteos:</p>
                                        </div>
                                        <br/>
                                        <p className={"font-regular font-size-14 ms-5"}>Acceso a desafíos y metas
                                            mensuales
                                            con premios exclusivos para <b>(CI)</b> Consultoras
                                            Independientes y <b>(Bi)</b> Beauty Influencers.</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className={"col-sm-12 col-md-6 col-lg-4"}>
                            <a className={"text-decoration-none cursor-pointer__hover"}>
                                <div className={"plans__card plans__card-bg-yellow"}>
                                    <h3 className={"text-center font-semi-bold"}>(BI) BEAUTY INFLUENCER</h3>
                                    <br/>
                                    <br/>
                                    <p className={"text-center font-regular font-size-20"}>Revendedoras ilimitadas. Dile
                                        SÍ
                                        a tu propio negocio.</p>
                                    <img className={"w-50 d-block m-auto pt-2-rem pb-3-rem"} alt={""}
                                         src={"https://cdn.pixabay.com/photo/2017/08/08/16/06/cosmetics-2611803_1280.png"}/>
                                    <div className={"d-flex flex-column w-75 m-auto"}>
                                        <hr/>
                                        <br/>
                                        <p className={"font-regular font-size-12"}>Inversión:</p>
                                        <p className={"font-bold font-size-30 plans__card-gs"}>Gs. 600.000</p>
                                        <p className={"font-regular font-size-12"}>Valor en productos:</p>
                                        <p className={"font-bold font-size-30 plans__card-gs"}>Gs. 1.400.000</p>
                                        <p className={"font-regular font-size-12"}>¡Ganancia!</p>
                                        <p className={"font-bold font-size-40 plans__card-winner"}>Gs. 800.000</p>
                                        <br/>
                                        <br/>
                                        <button className={"btn text-dark border-radius-25"}
                                                onClick={()=> navigate(RoutesPath.JOIN_NOW)}
                                                style={{background: 'transparent linear-gradient(90deg, #F3CC61 0%, #FBF3C0 100%) 0% 0% no-repeat padding-box'}}>
                                            <span className={"font-regular text-bold font-size-22"}>¡Únete ahora!</span>
                                        </button>
                                        <br/>
                                        <br/>
                                        <hr/>
                                        <p className={"font-regular font-size-20 text-center px-5"}><b>40%</b> De
                                            ganancia
                                            sobre el catálogo.</p>
                                        <hr/>
                                        <h5 className={"font-semi-bold"}>Kit de inicio:</h5>
                                        <br/>
                                        <div className={"d-flex align-items-center gap-3"}>
                                            <i className='bx bx-check font-size-22 text-bold'
                                               style={{color: 'yellow'}}/>
                                            <p>7 productos originales:</p>
                                        </div>
                                        <br/>
                                        <ul className="list-unstyled ms-5">
                                            <li className={"list-group-item"}>1 Rimel Extreme Curl</li>
                                            <li className={"list-group-item"}>1 Body Lotion Reyna</li>
                                            <li className={"list-group-item"}>1 Base VFX Pro 10 gr</li>
                                            <li className={"list-group-item"}>1 Fragancia Reyna 50 ml</li>
                                            <li className={"list-group-item"}>1 Brillo labial Farmasi</li>
                                            <li className={"list-group-item"}>1 Pack de Toallitas Farmasi</li>
                                            <li className={"list-group-item"}>1 Time Locker Spray 100 ml</li>
                                            <li className={"list-group-item"}>1 Agua Micelar</li>
                                            <li className={"list-group-item"}>1 Primer Illumination</li>
                                            <li className={"list-group-item"}>1 Primer Perfecting Make Up</li>
                                        </ul>
                                        <div className={"d-flex align-items-center gap-3"}>
                                            <i className='bx bx-check font-size-22 text-bold'
                                               style={{color: 'yellow'}}/>
                                            <p>2 Catálogos físicos.</p>
                                        </div>
                                        <div className={"d-flex align-items-center gap-3"}>
                                            <i className='bx bx-check font-size-22 text-bold'
                                               style={{color: 'yellow'}}/>
                                            <p>1 Revista Mujeres Exitosas.</p>
                                        </div>
                                        <br/>
                                        <div className={"d-flex align-items-center gap-3"}>
                                            <i className='bx bx-check font-size-22 text-bold'
                                               style={{color: 'yellow'}}/>
                                            <p className={"font-bold"}> Desafíos y sorteos:</p>
                                        </div>
                                        <br/>
                                        <p className={"font-regular font-size-14 ms-5"}>Acceso a desafíos y metas
                                            mensuales
                                            con premios exclusivos para (CI) Consultoras Independientes y (Bi) Beauty
                                            Influencers.</p>
                                        <br/>
                                        <div className={"d-flex align-items-center gap-3"}>
                                            <i className='bx bx-check font-size-22 text-bold'
                                               style={{color: 'yellow'}}/>
                                            <p className={"font-bold"}> Descuentos Exclusivos.</p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <div className="d-flex justify-content-center text-white">
                        <ul className="list-unstyled list-inline">
                            <li className="list-inline-item font-semi-bold font-size-22 ms-5">
                                <div className={"d-flex align-items-center gap-2"}>
                                    <i className='bx bxs-check-circle font-size-24' style={{color: '#ffc814'}}/>
                                    <p>Nuevos desafíos todos los meses.</p>
                                </div>
                            </li>
                            <li className="list-inline-item font-semi-bold font-size-22 ms-5">
                                <div className={"d-flex align-items-center gap-2"}>
                                    <i className='bx bxs-check-circle font-size-24' style={{color: '#ffc814'}}/>
                                    <p>Crecimiento asegurado.</p>
                                </div>
                            </li>
                            <li className="list-inline-item font-semi-bold font-size-22 ms-5">
                                <div className={"d-flex align-items-center gap-2"}>
                                    <i className='bx bxs-check-circle font-size-24' style={{color: '#ffc814'}}/>
                                    <p>Entrega rápida y segura.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={"w-60 m-auto d-block text-white d-flex flex-column align-items-center gap-5"}>
                    <div className={"row justify-content-center"}>
                        <div className={"col-sm-12 col-md-6 d-flex flex-column align-items-center gap-3 border-end pe-5"}>
                            <div className={"d-flex justify-content-start align-items-center"}>
                                <i className='bx bxs-check-shield'/>
                                <span>Métodos de pagos aceptados.</span>
                            </div>
                            <div className={"d-flex gap-3"}>
                                <div className={"bg-white border-radius-2 px-3 py-1"}>
                                    <img alt={"visa"} src={visaLogo} width={40}/>
                                </div>
                                <div className={"bg-white border-radius-2 px-3 py-1"}>
                                    <img alt={"master-visa"} src={masterCardLogo} width={40}/>
                                </div>
                                <div className={"bg-white border-radius-2 px-3 py-1 text-black"}>
                                    <p className={"font-size-8"}>Transferencia <br/>Bancaria</p>
                                </div>
                                <div className={"bg-white border-radius-2 px-3 py-1"}>
                                    <img alt={"tigo-money"} src={tigoMonetLogo} width={40}/>
                                </div>
                                <div className={"bg-white border-radius-2 px-3 py-1"}>
                                    <img alt={"billetera-personalñ"} src={billeteraPersonalLogo} width={40}/>
                                </div>
                            </div>
                            <br/>
                        </div>
                        <div className={"col-sm-12 col-md-6 d-flex flex-column justify-content-center ps-5"}>
                            <div className={"d-flex justify-content-start align-items-center mb-1"}>
                                <i className='bx bxs-lock'></i>
                                <span>Pagos seguros.</span>
                            </div>
                            <p>Las transacciones están encriptadas y son seguras.</p>
                        </div>
                    </div>
                    <h2 className={"font-bold"}>¿Todavía tienes dudas?</h2>
                    <div className={"border-2 px-5 border-radius-8"}>
                        <a href={"tel:0975123456"} className={"font-size-25 text-white text-decoration-none"}>Contáctanos: 0975123456</a>
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
            </section>
        </>
    )
}