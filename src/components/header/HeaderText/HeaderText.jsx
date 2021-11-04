import React from 'react';
import styles from './headerText.module.sass'


const HeaderText = (props) => {
    return (
        <div className={styles.headerText}>
            <h1>
                {props.isLang === false ? props.headerText[0] : props.headerText[1]}
            </h1> 
        </div>
    )
}

export default HeaderText