import React from 'react';
import styles from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {

    return (
        <div>
            <div className={styles.menuList}>
                <NavLink to={'/profile'} activeClassName={styles.active}>profile</NavLink>
                <NavLink to={'/signUp'} activeClassName={styles.active}>sign up</NavLink>
            </div>
        </div>
    );
};


export default Navbar;
