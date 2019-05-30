import React from 'react';
import styles from './headerText.module.sass'


const HeaderText = (props) => {
    return (
        <div className={styles.headerText}>
            <p>
                {props.isLang === false ? props.headerText[0] : props.headerText[1]}
            </p>
        </div>
    )
}

export default HeaderText