import React from 'react';
import styles from './Input.module.css'

type PropsType = {
    type: string
    placeholderValue: string
    error?: boolean

}

const Input = (props: PropsType) => {

    return (
        <input className={styles.input}                  //{`${styles.input} ${props.error ? styles.error : ''}`}
               type={props.type}
               placeholder={props.placeholderValue}
            // onChange={onInputChange}
            // onKeyPress={onKeyPress}
            // value={props.inputText}
        />
    )
};


export default Input;