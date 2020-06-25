import React from "react";
import Navbar from "./Navbar/Navbar";
import styles from './Header.module.css'
import logo from '../../../assets/ing/logo.png'
import Button from "../common/Button/Button";

const Header = () => {
    return (
        <div className={styles.headerWrapper}>
            <div className={styles.headerContainer}>
                <div className={styles.titleWrapper}>
                    <img className={styles.logo} src={logo} alt='logo'/>
                    <h1>Cards</h1>
                </div>
                <Navbar/>
                <Button nameButton='Log in' disabled={false} onClick={() => {
                }}/>
            </div>
        </div>
    )
}

export default Header