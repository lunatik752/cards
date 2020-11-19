import React, {useCallback} from "react";
import styles from './Header.module.css'
import logo from '../../../assets/ing/logo.png'
import Button from "../common/Button/Button";
import {NavLink} from "react-router-dom";
import {SIGN_IN_PATH} from "../Routes/Routes";
import {Navbar} from "./Navbar/Navbar";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../m2-redux/store";
import { logout } from "../../m2-redux/signInReducer";

const Header = React.memo(() => {
        const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.signIn.isLoggedIn);

        const dispatch = useDispatch();

        const logoutCallBack = useCallback(() => {
            dispatch(logout())
        }, [dispatch]);

        return (
            <div className={styles.headerWrapper}>
                <div className={styles.headerContainer}>
                    <div className={styles.titleWrapper}>
                        <img className={styles.logo} src={logo} alt='logo'/>
                        <h1>Cards</h1>
                    </div>
                    <Navbar/>

                    {!isLoggedIn
                        ? <NavLink to={SIGN_IN_PATH}><Button name='Login'/></NavLink>
                        : <Button name='LogOut' onClick={logoutCallBack}/>}
                </div>
            </div>
        )
    }
)

export default Header
