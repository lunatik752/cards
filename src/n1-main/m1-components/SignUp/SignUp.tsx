import React, {ChangeEvent, useCallback, useState} from 'react';
import styles from './SignUp.module.css'
import Input from '../common/Input/Input';
import Button from '../common/Button/Button';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../m2-redux/store';
import {addedUser, registerUser, setErrorMessage} from '../../m2-redux/registerReducer';
import {Redirect} from 'react-router-dom';

const SignUp = () => {

    const sendDataRedister = useSelector((state: AppRootStateType) => state.signUp.isSendData)
    const addedUserData = useSelector((state: AppRootStateType) => state.signUp.isAddedUser)
    const errorMessage = useSelector((state: AppRootStateType) => state.signUp.errorMessage)

    const dispatch = useDispatch()

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [repeatPassword, setRepeatPassword] = useState<string>('');


    const setEmailCallback = useCallback((e: ChangeEvent<HTMLInputElement>) => setEmail(e.currentTarget.value),
        [email]);

    const setPasswordCallback = useCallback((e: ChangeEvent<HTMLInputElement>) => {
            setPassword(e.currentTarget.value)
            setErrorMessage('')
        }, [password]
    );

    const setRepeatPasswordCallback = useCallback((e: ChangeEvent<HTMLInputElement>) => {
            setRepeatPassword(e.currentTarget.value)
            setErrorMessage('')
        }
        , [repeatPassword]);

    const onSubmit = useCallback(() => {
        dispatch(registerUser(email, password, true))
    }, [dispatch, password, email]);

    const validatePass = password.length < 7 ?
        'Password must be more than 7 characters'
        : 'Password:'
    const validateRepeatPass = password !== repeatPassword ?
        'incorrect password'
        : ''

    const disableSubmitButton = password !== repeatPassword || password.length < 7 && repeatPassword.length < 7

    const errorSpan = errorMessage ? errorMessage : ''

    if (sendDataRedister) {
        return <div>'Wait for the end of the operation...'</div>
    }
    if (addedUserData) {
        setTimeout(() => dispatch(addedUser(false)), 2000)
        return <Redirect to={'/login'}/>
    }
    return (
        <div className={styles.pageWrapper}>
            <span style={{color: 'red'}}>{errorSpan}</span>
            <div>
                <label>Email:</label>
                <Input type={'email'} value={email} onChange={setEmailCallback}/>
            </div>
            <div>
                <label>{validatePass}</label>
                <Input type={'password'} value={password} onChange={setPasswordCallback}/>
            </div>
            <div>
                <label>Repeat password:</label>
                <span>{validateRepeatPass}</span>
                <Input type={'password'} value={repeatPassword} onChange={setRepeatPasswordCallback}/>
            </div>

            <div>
                <Button disabled={disableSubmitButton} name={'Register'} onClick={onSubmit}/>
            </div>
        </div>
    )
}

export default SignUp
