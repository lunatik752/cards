import React, {ChangeEvent, useCallback, useState, MouseEvent} from 'react';
import styles from './Login.module.css'
import Button from "../common/Button/Button";
import Input from "../common/Input/Input";
import {NavLink, Redirect} from "react-router-dom";
import {RECOVER_PASS_PATH, PROFILE_PATH, SIGN_UP_PATH} from "../Routes/Routes";
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from "../../m2-redux/store";
import {logIn} from "../../m2-redux/signInReducer";


const Login = React.memo(() => {

    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.signIn.isLoggedIn);
    const dispatch = useDispatch()

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [rememberMe, setRememberMe] = useState<boolean>(false);

    const setEmailCallback = useCallback((e: ChangeEvent<HTMLInputElement>) => setEmail(e.currentTarget.value),
        [setEmail]);

    const setPasswordCallback = useCallback((e: ChangeEvent<HTMLInputElement>) => setPassword(e.currentTarget.value),
        [setPassword]);

    const setRememberMeCallback = useCallback((e: ChangeEvent<HTMLInputElement>) => setRememberMe(e.currentTarget.checked),
        [setRememberMe]);


    const onSubmit = useCallback((e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        dispatch(logIn(email, password, rememberMe))
    }, [email, password, rememberMe, dispatch]);

    if (isLoggedIn) {
        return <Redirect to={PROFILE_PATH}/>
    }

    return (
        <div className={styles.loginWrapper}>
            <div className={styles.title}>
                <h2>Login</h2>
            </div>
            <LoginForm email={email}
                       setEmail={setEmailCallback}
                       password={password}
                       setPassword={setPasswordCallback}
                       rememberMe={rememberMe}
                       setRememberMe={setRememberMeCallback}
                       onSubmit={onSubmit}/>
        </div>
    )
});

type PropsType = {
    email: string
    setEmail: (email: ChangeEvent<HTMLInputElement>) => void
    password: string
    setPassword: (password: ChangeEvent<HTMLInputElement>) => void
    rememberMe: boolean
    setRememberMe: (rememberMe: ChangeEvent<HTMLInputElement>) => void
    onSubmit: (e: MouseEvent<HTMLButtonElement>) => void
}

const LoginForm = React.memo((props: PropsType) => {

    return (
        <>
            <form className={styles.loginForm}>
                <div>
                    <Input placeholder='Email'
                           type='email'
                           value={props.email}
                           onChange={props.setEmail}/>
                </div>
                <div>
                    <Input placeholder='Password'
                           type='password'
                           value={props.password}
                           onChange={props.setPassword}/>
                </div>
                <div className={styles.recoverPassword}>
                    <NavLink to={RECOVER_PASS_PATH} activeClassName={styles.active}>Forgot password?</NavLink>
                </div>

                <div className={styles.rememberMe}>
                    <Input
                        type='checkbox'
                        name='rememberMe'
                        checked={props.rememberMe}
                        onChange={props.setRememberMe}
                    />
                    <label> remember me</label>
                </div>
                <Button name='Sign in' onClick={props.onSubmit}/>
            </form>
            <div className={styles.signUp}>
                <span>Not registered! <NavLink to={SIGN_UP_PATH }
                                               activeClassName={styles.active}>Sign up</NavLink> now.</span>
            </div>
        </>
    );
})


export default Login;
