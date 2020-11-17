import React from "react";
import styles from './Profile.module.css'
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../m2-redux/store";
import { ResponseDataType } from "../../m3-dal/auth-api";


const Profile = React.memo(() => {

const userData = useSelector<AppRootStateType>(state => state.signIn)

    console.log(userData);

    return (
        <div className={styles.pageWrapper}>
            <h2>Profile</h2>
        </div>
    )
})

export default Profile
