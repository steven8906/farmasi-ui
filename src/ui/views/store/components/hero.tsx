import "../styles/_promo.scss";
import Carousel from "nuka-carousel";
import {buildFileUrl} from "../../../../cross-cutting/utils";
import {Banner} from "../../admin/use-cases/use-admin";

type Props = {formDataBanner: Banner};
export default function Hero({formDataBanner} : Props) {
    return <>
        <Carousel defaultControlsConfig={{nextButtonText:'>', prevButtonText:'<'}}>
            <img src={buildFileUrl(formDataBanner.banner_image_one)} className={"w-100"} alt={""}/>
            <img src={buildFileUrl(formDataBanner.banner_image_two)} className={"w-100"} alt={""}/>
            <img src={buildFileUrl(formDataBanner.banner_image_three)} className={"w-100"} alt={""}/>
        </Carousel>
    </>
}