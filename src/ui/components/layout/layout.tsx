import Navbar from "./navbar";
import Footer from "./footer";
import useApp from "../../../application/use-cases/use-app";
import AppContext from "../../../application/context/app-context";
import NavbarLogged from "./navbar-logged";
import React from "react";

interface Props {
    children    : React.ReactNode;
    isLogged    ?: boolean;
    outContainer?: boolean;
}

export default function Layout({children, isLogged = false, outContainer = false}: Props) {
    const {productList, plan, session, setSession, setPlan, setProductList} = useApp();

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
                        {isLogged ? <NavbarLogged/> : <Navbar/>}
                        {children}
                        <Footer/>
                    </> :
                    children}
            </AppContext.Provider>
        </>
    )
}