import React from 'react';
import style from './Button.module.css'

type PropsType = {
    nameButton: string
    disabled: boolean
    onClick: () => void

}

const Button = (props: PropsType) => {

    return (
        <div>
            <button className={style.button}
                    onClick={props.onClick}
                    disabled={props.disabled}
            >{props.nameButton}
            </button>
        </div>
    )
};


export default Button;