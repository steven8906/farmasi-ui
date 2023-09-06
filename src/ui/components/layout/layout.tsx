import Navbar from "./navbar";
import Footer from "./footer";
import useApp from "../../../application/use-cases/use-app";
import AppContext from "../../../application/context/app-context";
import NavbarLogged from "./navbar-logged";
import React from "react";
import useLoginStore from "../../../application/store/use-login-store";

interface Props {
    children    : React.ReactNode;
    isLogged    ?: boolean;
    outContainer?: boolean;
}

export default function Layout({children, isLogged = false, outContainer = false}: Props) {
    const {productList, plan, setSession, setPlan, setProductList} = useApp();
    const session = useLoginStore(state => state.session);

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
                        {session ? <NavbarLogged/> : <Navbar/>}
                        {children}
                        <Footer/>
                    </> :
                    children}
            </AppContext.Provider>
        </>
    )
}