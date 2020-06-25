import React from 'react';
import style from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {

    return (
        <div>
            <div className={style.menuList}>
                    <NavLink to={'/homePage'}>home page</NavLink>
                    <NavLink to={'/anotherPage'}>another  page</NavLink>
            </div>
        </div>
    );
};


export default Navbar;