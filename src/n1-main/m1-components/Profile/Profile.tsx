import React, {useEffect} from "react";
import styles from './Profile.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../m2-redux/store";
import {InitialAppReducerStateType, initializeApp} from "../../m2-redux/profileReducer";
import {Redirect} from "react-router-dom";
import {SIGN_IN_PATH} from "../Routes/Routes";


const Profile = React.memo(() => {

    const {userData, isInitialized} = useSelector<AppRootStateType, InitialAppReducerStateType>(state => state.profile)
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.signIn.isLoggedIn);

    const dispatch = useDispatch();

    useEffect(() => {
        if (!isInitialized) {
            dispatch(initializeApp())
        }
    }, [isInitialized, dispatch]);

    if (!isLoggedIn) {
        return <Redirect to={SIGN_IN_PATH}/>
    }

    return (
        <div className={styles.pageWrapper}>
            <h2>Profile</h2>
            <span>email: {userData.email}</span>
        </div>
    )
})

export default Profile
