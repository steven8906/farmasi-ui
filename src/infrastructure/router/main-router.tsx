import {HashRouter, Routes, Route} from "react-router-dom";
import Home from "../../ui/views/home/home";
import Layout from "../../ui/components/layout/layout";
import routesPath from "./routes-path";
import Plans from "../../ui/views/plans/plans";

export default function MainRouter() {

    return (
        <HashRouter>
            <Layout>
                <Routes>
                    <Route path={routesPath.HOME} element={<Home/>}/>
                    <Route path={routesPath.PLANS} element={<Plans/>}/>
                </Routes>
            </Layout>
        </HashRouter>
    )
}