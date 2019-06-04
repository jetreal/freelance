import React from 'react';
import styles from './button.module.sass';

export default (props) => {
    return (
        <button className={props.className} 
                onClick={props.isBlockedSlider === false ?
                props.handleClick : null}>
            {props.name}    
        </button>
    )
}