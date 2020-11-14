import React from "react";
import styles from './Header.module.css'
import logo from '../../../assets/ing/logo.png'
import Button from "../common/Button/Button";
import {NavLink} from "react-router-dom";
import {SIGN_IN_PATH} from "../Routes/Routes";
import {Navbar} from "./Navbar/Navbar";

const Header = () => {
    return (
        <div className={styles.headerWrapper}>
            <div className={styles.headerContainer}>
                <div className={styles.titleWrapper}>
                    <img className={styles.logo} src={logo} alt='logo'/>
                    <h1>Cards</h1>
                </div>
                <Navbar/>
                <NavLink to={SIGN_IN_PATH}><Button name='Login'/></NavLink>
            </div>
        </div>
    )
}

export default Header
