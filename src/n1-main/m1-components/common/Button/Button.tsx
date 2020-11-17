import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
import styles from './Button.module.css';

type   ButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

const Button = React.memo((props: ButtonPropsType) => {
    const {...restProps} = props;
    return (
        <button className={styles.button} {...restProps}>{props.name}</button>
    );
})

export default Button;

