import React from 'react';

import logo from "../../logo.svg";
import './main-navigation.css'

import NavigationItems from "./navigation-items/navigation-items";

const MainNavigation = (props) => (
    <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <ul className="main-nav__items">
            <NavigationItems isAuth={props.isAuth} />
        </ul>
    </header>
);

export default MainNavigation;