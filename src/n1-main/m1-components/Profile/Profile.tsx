import React, { useEffect } from "react";
import styles from './Profile.module.css'
import {useSelector, useDispatch} from "react-redux";
import {AppRootStateType} from "../../m2-redux/store";
import {UserDataType} from "../../m3-dal/profile-api";
import {initializeApp} from "../../m2-redux/profileReducer";
import { Redirect } from "react-router-dom";
import { SIGN_IN_PATH } from "../Routes/Routes";


const Profile = React.memo(() => {

    const userData = useSelector<AppRootStateType, UserDataType>(state => state.signIn.userData)
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.signIn.isLoggedIn);

    const dispatch = useDispatch();

    useEffect(() => {
        if(!userData) {
            dispatch(initializeApp())
        }
    }, [userData,dispatch]);

    if (!isLoggedIn) {
        return <Redirect to={SIGN_IN_PATH}/>
    }


    console.log(userData);

    return (
        <div className={styles.pageWrapper}>
            <h2>Profile</h2>
            <span>email: {userData.email}</span>
            <span>email: {userData.email}</span>

        </div>
    )
})

export default Profile
