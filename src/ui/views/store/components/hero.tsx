import BannerOne from "../../../../infrastructure/assets/img/banner-1.png";
import BannerTwo from "../../../../infrastructure/assets/img/banner-2.png";
import BannerThree from "../../../../infrastructure/assets/img/banner-3.png";
import "../styles/_promo.scss";
import Carousel from "nuka-carousel";

export default function Hero() {
    return <>
        <Carousel defaultControlsConfig={{nextButtonText:'>', prevButtonText:'<'}}>
            <img src={BannerOne} className={"w-100"} alt={""}/>
            <img src={BannerTwo} className={"w-100"} alt={""}/>
            <img src={BannerThree} className={"w-100"} alt={""}/>
        </Carousel>
    </>
}