import React from "react/ts5.0";
import Footer from "./footer";
import NavbarLogged from "./navbar-logged";

interface Props {
    children: React.ReactNode;
}

export default function LayoutLogged({children}: Props) {
    return <>
        <NavbarLogged/>
        {children}
        <Footer/>
    </>
}