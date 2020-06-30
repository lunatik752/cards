import React from "react";
import styles from './SignUp.module.css'
import Input from "../common/Input/Input";
import {NavLink} from "react-router-dom";
import Button from "../common/Button/Button";

const SignUp = () => {

    const onSubmit = () => {
        alert('Sign Up')
    };

    return (
        <div className={styles.signUpWrapper}>
            <div className={styles.title}>
                <h2>Sign Up</h2>
            </div>
            <SignUpForm onSubmit={onSubmit}/>
        </div>
    )
};

type PropsType = {
    onSubmit: () => void
}

const SignUpForm = (props: PropsType) => {
    return (
        <>
            <form className={styles.signUpForm}>
                <div>
                    <Input placeholderValue='Email'
                           type='email'/>
                </div>
                <div>
                    <Input placeholderValue='Password'
                           type='password'/>
                </div>
                <div>
                    <Input placeholderValue='Repeat Password'
                           type='password'/>
                </div>
                <Button title='Register' onClick={props.onSubmit}/>
            </form>
            <div className={styles.signUp}>
                <span className={styles.signIn}>
                    You have account?
                    <NavLink
                        to={'/login'}
                        activeClassName={styles.active}>
                        Sign in
                    </NavLink>
                </span>
            </div>
        </>
    );
}


export default SignUp