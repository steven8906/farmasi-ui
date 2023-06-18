import "../styles/_view-plans.scss";
import {useEffect, useId} from "react";

export default function ViewPlans() {
    const sectionID = useId();

    function scrollHandler(): void {
        const sectionElement = (document.getElementById(sectionID) as HTMLElement).getBoundingClientRect();
        const imgOneContainer = document.querySelector(".view-plans__planes-container-img-1") as HTMLDivElement;
        const imgTwoContainer = document.querySelector(".view-plans__planes-container-img-2") as HTMLDivElement;
        if (sectionElement.top >= 0 && sectionElement.bottom <= window.innerHeight) {
            imgOneContainer.style.left       = '-130px';
            imgOneContainer.style.transition = '0.6s';
            imgTwoContainer.style.right      = '-130px';
            imgTwoContainer.style.transition = '0.6s';
        }else {
            imgOneContainer.style.left       = '-50px';
            imgOneContainer.style.transition = '0.6s';
            imgTwoContainer.style.right      = '-50px';
            imgTwoContainer.style.transition = '0.6s';
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollHandler);
        return () => {
            window.removeEventListener('scroll', scrollHandler);
        }
    }, [])

    return (
        <>
            <section id={sectionID} className={"view-plans"}>
                <article className={"m-auto text-center py-100"}>
                    <div className={"container"}>
                        <h2 className={"text-bold"}>CONVIÉRTETE EN BEAUTY INFLUENCER</h2>
                        <br/>
                        <br/>
                        <h4>Farmasi te ofrece una gran oportunidad de negocio, donde puedes ahorrar cuando compras,
                            ganar
                            más cuando vendes y ganar aun más creando tu propio equipo.</h4>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                    </div>
                    <div className={"view-plans__planes position-relative pb-5-rem"}>
                        <div className={"view-plans__planes-container-img-1 d-sm-none d-md-block"}>
                            <img className={"w-100 d-block"}
                                 alt={""}
                                 src={"https://www.guerlain.com/dw/image/v2/BDCZ_PRD/on/demandware.static/-/Sites-GSA_master_catalog/default/dwda8e0b35/images/G041632/3346470416321_G041632_VOIL%2013%20PDR%20COMP%20TEINTE%20MEDIUM_6.5%20G_x_2.png?sw=900&sh=900"}/>
                        </div>
                        <p className={"font-size-22 z-1"}>¡Descubre oportunidades increíbles!</p>
                        <br/>
                        <br/>
                        <button className={"btn btn-primary text-white font-size-20 px-5"}>Ver planes</button>
                        <div className={"view-plans__planes-container-img-2 d-sm-none d-md-block"}>
                            <img className={"w-100 d-block"}
                                 alt={""}
                                 src={"https://www.guerlain.com/dw/image/v2/BDCZ_PRD/on/demandware.static/-/Sites-GSA_master_catalog/default/dwda8e0b35/images/G041632/3346470416321_G041632_VOIL%2013%20PDR%20COMP%20TEINTE%20MEDIUM_6.5%20G_x_2.png?sw=900&sh=900"}/>
                        </div>
                    </div>
                </article>
            </section>
        </>
    )
}