import {HashRouter, Route, Routes} from "react-router-dom";
import Home from "../../ui/views/home/home";
import Layout from "../../ui/components/layout/layout";
import routesPath from "./routes-path";
import Plans from "../../ui/views/plans/plans";
import JoinNow from "../../ui/views/join-now/join-now";
import Login from "../../ui/views/login/login";
import Store from "../../ui/views/store/store";
import Shop from "../../ui/views/shop/shop";
import Bi from "../../ui/views/bi/bi";
import Loading from "../../ui/components/loading";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Admin from "../../ui/views/admin/admin";
import NotFound from "../../ui/views/not-found/not-found";
import useSession from "../../application/use-cases/use-session";
import PaymentConfirm from "../../ui/views/payment-confirm/payment-confirm.tsx";
import Checkout from "../../ui/views/checkout/checkout.tsx";
import PrivacyPolicies from "../../ui/views/privacy-policies/privacy-policies.tsx";
import VisionMision from "../../ui/views/mision-vision/vision-mision.tsx";
import PaymentMethod from "../../ui/views/payment-method/payment-method.tsx";
import Shipping from "../../ui/views/shipping/shipping.tsx";

export default function MainRouter() {
    const { sessionStore } = useSession();

    return (
        <>
            <HashRouter>
                <Routes>
                    <Route path={routesPath.NOT_FOUND} element={<Layout outContainer={false}><NotFound/></Layout>}/>
                    <Route path={routesPath.HOME} element={<Layout><Home/></Layout>}/>
                    <Route path={routesPath.PLANS} element={<Layout><Plans/></Layout>}/>
                    <Route path={routesPath.JOIN_NOW} element={<Layout><JoinNow/></Layout>}/>
                    <Route path={`${routesPath.JOIN_NOW}/:plan`} element={<Layout><JoinNow/></Layout>}/>
                    <Route path={routesPath.STORE} element={<Layout><Store/></Layout>}/>
                    <Route path={routesPath.SHOP} element={<Layout><Shop/></Layout>}/>
                    <Route path={routesPath.BI} element={<Layout><Bi/></Layout>}/>
                    <Route path={routesPath.PAYMENT_CONFIRM} element={<Layout><PaymentConfirm/></Layout>}/>
                    <Route path={routesPath.CHECKOUT} element={<Layout><Checkout/></Layout>}/>
                    <Route path={routesPath.PRIVACY_POLICIES} element={<Layout><PrivacyPolicies/></Layout>}/>
                    <Route path={routesPath.MISSION_VISION} element={<Layout><VisionMision/></Layout>}/>
                    <Route path={routesPath.PAYMENT_METHOD} element={<Layout><PaymentMethod/></Layout>}/>
                    <Route path={routesPath.SHIPPING} element={<Layout><Shipping/></Layout>}/>
                    {sessionStore.user && sessionStore.user.user === 'System' && <Route path={routesPath.ADMIN} element={<Layout><Admin/></Layout>}/>}
                    <Route path={routesPath.LOGIN} element={<Layout outContainer={true}><Login/></Layout>}/>
                </Routes>
            </HashRouter>
            <Loading/>
            <ToastContainer/>
        </>
    )
}
