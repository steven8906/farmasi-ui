import "./styles/_plans.scss";
import visaLogo from "../../../infrastructure/assets/img/visa.png";
import masterCardLogo from "../../../infrastructure/assets/img/master-card.png";
import tigoMonetLogo from "../../../infrastructure/assets/img/tigo-money.png";
import billeteraPersonalLogo from "../../../infrastructure/assets/img/billetera-personal.png";
import {useNavigate} from "react-router-dom";
import RoutesPath from "../../../infrastructure/router/routes-path";
import Plan from "../../../cross-cutting/plans";
import bgPlan from "../../../infrastructure/assets/img/bg-plans.png";
import useAppContext from "../../../application/use-cases/use-app-context";
//TODO:Pendiente por definir
// import useLoginStore from "../../../application/store/use-login-store";
// import SessionModel from "../../../data/models/session-model";

export default function Plans() {
    const navigate  = useNavigate();
    const {setPlan} = useAppContext();
    //const {config_plans}  = useLoginStore(state => state.session as SessionModel);
    const styleBg = {
        width           : '100vw',
        height          : window.innerWidth > 728 ? window.innerHeight * .8 : '40vh',
        backgroundImage : `url(${bgPlan})`,
        backgroundSize  : 'cover'
    }
    return (
        <>
            <section className={"plans__main"}>
                <div style={{...styleBg}} className={"d-flex flex-column align-items-center justify-content-center"}>
                    <div className={"w-75 d-flex flex-column"}>
                        <div className={"align-self-end w-25 me-5 p-1 bg-white border-1 border-dark border-bottom-0 rounded-top"}>
                            <div>¡'Unete ahora!</div>
                        </div>
                        <div className={"p-4 border-1 border-dark border-radius-10 bg-white"}>
                            <div>
                                <div className={"py-3"}>
                                    <p><b> sad </b> </p>
                                    <p><b> as </b> </p>
                                    <p><b>  </b> </p>
                                    <p><b>  </b> </p>
                                    <p><b>  </b> </p>
                                    <p><b>  </b> </p>
                                    <p><b>  </b> </p>
                                </div>

                                <button className={"btn text-dark border-radius-25"}
                                        onClick={() => {
                                            setPlan(Plan.THREE);
                                            navigate(RoutesPath.JOIN_NOW);
                                        }}
                                        style={{background: 'transparent linear-gradient(90deg, #F3CC61 0%, #FBF3C0 100%) 0% 0% no-repeat padding-box'}}>
                                    <span className={"font-regular text-bold font-size-22"}>¡Suscribirme!</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center text-white p-5">
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
                <div className={"w-60 m-auto d-block text-white d-flex flex-column align-items-center gap-5"}>
                    <div className={"row justify-content-center"}>
                        <div
                            className={"col-sm-12 col-md-6 d-flex flex-column align-items-center gap-3 border-end pe-5"}>
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
                        <div className={"col-sm-12 col-md-6 d-flex flex-column justify-content-start ps-5"}>
                            <div className={"d-flex justify-content-start align-items-center mb-1"}>
                                <i className='bx bxs-lock'/>
                                <span>Pagos seguros.</span>
                            </div>
                            <p className={"text-start"}>Las transacciones están encriptadas y son seguras.</p>
                        </div>
                    </div>
                    <h2 className={"font-bold"}>¿Todavía tienes dudas?</h2>
                    <div className={"border-2 px-5 border-radius-8"}>
                        <a href={"tel:0975123456"} className={"font-size-25 text-white text-decoration-none"}>Contáctanos:
                            0975123456</a>
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