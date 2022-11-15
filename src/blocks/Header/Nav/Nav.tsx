import React from 'react';
import s from './Nav.module.css';
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <div className={s.nav}>
            <NavLink to="#">Home</NavLink>
            <NavLink to="#">Skills</NavLink>
            <NavLink to="#">Projects</NavLink>
            <NavLink to="#">Contacts</NavLink>
        </div>
    );
};

export default Nav;