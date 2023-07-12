import React from "react/ts5.0";
import Navbar from "./navbar";
import Footer from "./footer";
import useApp from "../../../application/use-cases/use-app";
import AppContext from "../../../application/context/app-context";
import NavbarLogged from "./navbar-logged";

interface Props {
    children  : React.ReactNode;
    isLogged? : boolean;
}

export default function Layout({children, isLogged = false}: Props) {
    const {productList} = useApp();

    return (
        <>
            <AppContext.Provider value={{productList}}>
                {isLogged ? <NavbarLogged/> : <Navbar/>}
                {children}
                <Footer/>
            </AppContext.Provider>
        </>
    )
}