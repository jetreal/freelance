import React from 'react'
import styles from './button.module.sass'

const Button = (props) => {
    return (
        <button className={props.checked ? styles.button2 : styles.button1 }
                onClick={props.handleClick}
                >
            {props.name}
        </button>
    )
}

export default Button