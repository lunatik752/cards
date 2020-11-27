import React from 'react';
import styles from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import {CHANGE_PASS_PATH, PROFILE_PATH, RECOVER_PASS_PATH, SIGN_UP_PATH, PACKS_CARDS_PATH} from "../../Routes/Routes";

export const Navbar = () => {

    return (
        <div>
            <div className={styles.menuList}>
                <NavLink to={PROFILE_PATH} activeClassName={styles.active}>profile</NavLink>
                <NavLink to={SIGN_UP_PATH} activeClassName={styles.active}>sign up</NavLink>
                <NavLink to={RECOVER_PASS_PATH} activeClassName={styles.active}>recover password</NavLink>
                <NavLink to={CHANGE_PASS_PATH} activeClassName={styles.active}>change password</NavLink>
                <NavLink to={PACKS_CARDS_PATH} activeClassName={styles.active}>packs</NavLink>
            </div>
        </div>
    );
};


