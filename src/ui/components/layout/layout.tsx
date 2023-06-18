import React from "react/ts5.0";
import Navbar from "./navbar";
import Footer from "./footer";

interface Props {
    children: React.ReactNode;
}

export default function Layout({children}: Props) {

    return (
        <>
            <Navbar/>
            {children}
            <Footer/>
        </>
    )
}