import React from 'react';


const HeaderText = (props) => {
    return (
        <div>
            <p>
                {props.isLang === false ? props.headerText[0] : props.headerText[1]}
            </p>
        </div>
    )
}

export default HeaderText