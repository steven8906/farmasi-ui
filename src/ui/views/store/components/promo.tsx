import "../styles/_promo.scss";

export default function Promo(){

    return <>
        <div className={"bg-primary-light w-100 pb-5"}>
            <div className={"container"}>
                <div className={"promo__main"}>
                    <div className={"promo__main-content p-3"}>
                        <section className={"text-center"}>
                            <h1 className={"font-bold font-size-60"}>
                                <span className={"text-white"}>70%</span>
                                &nbsp;
                                <span className={"off"}>OFF</span>
                            </h1>
                            <h3 className={"text-white font-bold"}>HASTA AGOTAR STOCK</h3>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </>
}