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
import SessionModel, {Permission} from "../../data/models/session-model";
import NotFound from "../../ui/views/not-found/not-found";

export default function MainRouter() {
    const session: SessionModel = useLoginStore(state => state.session);

    function checkPermission(permission: string): boolean {
        if (Object.keys(session).length > 0) {
            const permissionData = session.permissions.find(x => x.name === permission) as Permission;
            const roles = session.role_has_model.filter(x => x.model_id === session.user.id);
            let allow = false;
            roles.forEach(role => {
                const rolesWithPermission = session.role_has_permissions.filter(x => x.permission_id === permissionData.id);
                if (rolesWithPermission.some(x => x.role_id === role.role_id)) allow = true;
            })
            return allow
        }
        return false;
    }

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
                    {checkPermission('read:admin') &&
                        <Route path={routesPath.ADMIN} element={<Layout><Admin/></Layout>}/>}
                    <Route path={routesPath.LOGIN} element={<Layout outContainer={true}><Login/></Layout>}/>
                </Routes>
            </HashRouter>
            <Loading/>
            <ToastContainer/>
        </>
    )
}