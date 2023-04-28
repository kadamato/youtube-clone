import {Outlet} from "react-router-dom";
import React from "react";


import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";

import "./MainLayout.css";


export default function MainLayout() {
    return (
        <>
            <Header />
            <div className="mainLayout">
                <Menu/>
                <div className="menu__wall"></div>
                <Outlet/>
            </div>
        </>
    );
}
