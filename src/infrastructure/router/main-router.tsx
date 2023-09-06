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
import useLoginStore from "../../application/store/use-login-store";
import SessionModel from "../../data/models/session-model";

export default function MainRouter() {
    const session:SessionModel = useLoginStore(state => state.session);
    return (
        <>
            <HashRouter>
                    <Routes>
                        <Route path={routesPath.HOME} element={<Layout><Home/></Layout>}/>
                        <Route path={routesPath.PLANS} element={<Layout><Plans/></Layout>}/>
                        <Route path={routesPath.JOIN_NOW} element={<Layout><JoinNow/></Layout>}/>
                        <Route path={routesPath.STORE} element={<Layout><Store/></Layout>}/>
                        <Route path={routesPath.SHOP} element={<Layout><Shop /></Layout>}/>
                        <Route path={routesPath.BI} element={<Layout><Bi/></Layout>}/>
                        {session?.permissions?.some(x => x.name === 'read:admin') && <Route path={routesPath.ADMIN} element={<Layout><Admin/></Layout>}/>}
                    </Routes>
                    <Routes>
                        <Route path={routesPath.LOGIN} element={<Layout outContainer={true}><Login/></Layout>}/>
                    </Routes>
            </HashRouter>
            <Loading/>
            <ToastContainer />
        </>
    )
}