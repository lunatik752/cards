import React, {ChangeEvent, useState} from 'react';
import styles from './Login.module.css'
import Button from "../common/Button/Button";
import Input from "../common/Input/Input";
import {NavLink} from "react-router-dom";


const Login = () => {

    const [email, setEmailInputValue] = useState<string>('');
    const [password, setPasswordInputValue] = useState<string>('');
    const [rememberMe, setRememberMeInputValue] = useState<boolean>(false);


    const onSubmit = () => {
        alert('Login')
    };

    return (
        <div className={styles.loginWrapper}>
            <div className={styles.title}>
                <h2>Login</h2>
            </div>
            <LoginForm email={email}
                       setEmailInputValue={setEmailInputValue}
                       password={password}
                       setPasswordInputValue={setPasswordInputValue}
                       rememberMe={rememberMe}
                       setRememberMeInputValue={setRememberMeInputValue}
                       onSubmit={onSubmit}/>
        </div>
    )
};

type PropsType = {
    email: string
    setEmailInputValue: (value: string) => void
    password: string
    setPasswordInputValue: (value: string) => void
    rememberMe: boolean
    setRememberMeInputValue: (value: boolean) => void
    onSubmit: () => void
}

const LoginForm = (props: PropsType) => {

    const onEmailInputValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        props.setEmailInputValue(e.currentTarget.value)
    }
    const onPasswordInputValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        props.setPasswordInputValue(e.currentTarget.value)
    }
    const onRememberMeInputValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        props.setRememberMeInputValue(e.currentTarget.checked)
    }

    return (
        <>
            <form className={styles.loginForm}>
                <div>
                    <Input placeholder='Email'
                           type='email'
                           value={props.email}
                           onChange={onEmailInputValueChange}/>
                </div>
                <div>
                    <Input placeholder='Password'
                           type='password'
                           value={props.password}
                           onChange={onPasswordInputValueChange}/>
                </div>
                <div className={styles.recoverPassword}>
                    <NavLink to={'/recoverPassword'} activeClassName={styles.active}>Forgot password?</NavLink>
                </div>

                <div className={styles.rememberMe}>
                    <Input
                        type='checkbox'
                        name='rememberMe'
                        checked={props.rememberMe}
                        onChange={onRememberMeInputValueChange}
                    />
                    <label> remember me</label>
                </div>
                <Button name='Sign in' onClick={props.onSubmit}/>
            </form>
            <div className={styles.signUp}>
                <span>Not registered! <NavLink to={'/signUp'}
                                               activeClassName={styles.active}>Sign up</NavLink> now.</span>
            </div>
        </>
    );
}


export default Login;