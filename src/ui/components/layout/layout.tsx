import Navbar from "./navbar";
import Footer from "./footer";
import useApp from "../../../application/use-cases/use-app";
import AppContext from "../../../application/context/app-context";
import NavbarLogged from "./navbar-logged";
import React, {useEffect} from "react";
import useLoginStore from "../../../application/store/use-login-store";
import httpServices from "../../../application/services/http-services";
import ResponseModel from "../../../data/models/response-model";
import SessionModel from "../../../data/models/session-model";

interface Props {
    children    : React.ReactNode;
    isLogged    ?: boolean;
    outContainer?: boolean;
}

export default function Layout({children, outContainer = false}: Props) {
    const {productList, plan, setSession, setPlan, setProductList} = useApp();
    const session = useLoginStore(state => state.session);
    const setSessionStore = useLoginStore((state) => state.setSession);

    useEffect(()=> {
        httpServices.getNoPaginate<ResponseModel<SessionModel>>({ action: 'products/initial'})
            .then((res) => {
                setSession(res.data.data);
                setSessionStore(res.data.data);
            })
    }, [])

    return (
        <>
            <AppContext.Provider value={{
                productList,
                plan,
                session,
                setSession,
                setPlan,
                setProductList
            }}>
                {!outContainer ? <>
                        {Object.keys(session).length > 0 && typeof session?.user !== 'undefined' ? <NavbarLogged/> : <Navbar/>}
                        {children}
                        <Footer/>
                    </> :
                    children}
            </AppContext.Provider>
        </>
    )
}