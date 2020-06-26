import React from 'react';
import styles from './Login.module.css'
import Button from "../common/Button/Button";
import Input from "../common/Input/Input";


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
                <Input placeholderValue='Email'
                       type='email'/>
            </div>
            <div>
                <Input placeholderValue='Password'
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