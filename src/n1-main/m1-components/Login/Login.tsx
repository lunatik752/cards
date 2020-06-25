import React from 'react';
import styles from './Login.module.css'
import Button from "../common/Button/Button";


const Login = () => {

    const onSubmit = () => {
        alert('Login')
    };

    return (
        <div className={styles.loginWrapper}>
            <div className={styles.title}>
                <h2>Login</h2>
            </div>
            <LoginForm onSubmit={onSubmit}/>
        </div>
    )
};

type PropsType = {
    onSubmit: () => void
}

const LoginForm = (props: PropsType) => {
    return (
        <form className={styles.loginForm}>
            <div>
                <input placeholder='Email'
                       name='email'/>
            </div>
            <div>
                <input placeholder='Password'
                       name='password'
                       type='password'/>
            </div>
            <div className={styles.rememberMe}>
                <input
                    type='checkbox'
                    name='rememberMe'
                />
                <label> remember me</label>
            </div>
            <Button title='Sign in' onClick={props.onSubmit}/>
        </form>
    );
}


export default Login;