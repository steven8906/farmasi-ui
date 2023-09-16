import "../styles/_promo.scss";
import {Banner} from "../../admin/use-cases/use-admin";

type Props = { formDataBanner: Banner };
export default function Promo({formDataBanner}: Props) {

    return <>
        {typeof formDataBanner.percent !== 'undefined' && <div className={"bg-primary-light w-100 pb-5"}>
            <div className={"container"}>
                <div className={"promo__main"}>
                    <div className={"promo__main-content p-3"}>
                        <section className={"text-center"}>
                            <h1 className={"font-bold font-size-60"}>
                                <span
                                    className={"text-white"}>{`${parseFloat(formDataBanner.percent.toString()).toFixed(0)}%`}</span>
                                &nbsp;
                                <span className={"off"}>OFF</span>
                            </h1>
                            <h3 className={"text-white font-bold"}>{formDataBanner.text_bottom_banner}</h3>
                        </section>
                    </div>
                </div>
            </div>
        </div>}
    </>
}