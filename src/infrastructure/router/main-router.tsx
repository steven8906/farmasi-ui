import {HashRouter, Route, Routes} from "react-router-dom";
import Home from "../../ui/views/home/home";
import Layout from "../../ui/components/layout/layout";
import routesPath from "./routes-path";
import Plans from "../../ui/views/plans/plans";
import JoinNow from "../../ui/views/join-now/join-now";
import Login from "../../ui/views/login/login";
import Store from "../../ui/views/store/store";
import LayoutLogged from "../../ui/components/layout/layout-logged";

export default function MainRouter() {

    return (
        <>
            <HashRouter>
                <Routes>
                    <Route path={routesPath.HOME} element={<Layout><Home/></Layout>}/>
                    <Route path={routesPath.PLANS} element={<Layout><Plans/></Layout>}/>
                    <Route path={routesPath.JOIN_NOW} element={<Layout><JoinNow/></Layout>}/>
                    <Route path={routesPath.STORE} element={<LayoutLogged><Store/></LayoutLogged>}/>
                </Routes>
                <Routes>
                    <Route path={routesPath.LOGIN} element={<Login/>}/>
                </Routes>
            </HashRouter>
        </>
    )
}