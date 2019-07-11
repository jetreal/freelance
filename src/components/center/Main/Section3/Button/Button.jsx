import React from 'react';

export default (props) => {
    return (
        <button className={props.className} 
                onClick={props.isBlockedSlider === false ?
                props.handleClick : null}>
            {props.name}    
        </button>
    )
}