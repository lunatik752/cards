import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
import styles from './Button.module.css';

type   ButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
    &
    { buttonClass: string }

const Button = (props: ButtonPropsType) => {
    const {...restProps} = props;
    return (
        <button className={styles[props.buttonClass]} {...restProps}/>
    );
}

export default Button;