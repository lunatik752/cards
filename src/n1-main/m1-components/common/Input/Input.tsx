import React, {DetailedHTMLProps, InputHTMLAttributes, useCallback} from 'react';
import styles from './Input.module.css';

export type InputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
    & { onEnter?: () => void, error?: string };

const Input = React.memo((props: InputPropsType) => {
    const {onEnter, error, ...restProps} = props;

    const onClickEnter = useCallback((event: React.KeyboardEvent<HTMLInputElement>) => {
        if (onEnter && event.key === "Enter") {
            onEnter()
        }
    }, [onEnter])

    return (
        <>
            <input className={styles.input} {...restProps}  onKeyPress={onClickEnter}/>
            {error ? <span>{error}</span> : ''}
        </>
    );
})

export default Input;
