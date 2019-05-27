import React from 'react';
import styles from './buttonRuEn.module.sass';

const ButtonRuEn = (props) => {
    return (
        <button className={styles.langBtn}
            onClick={props.changeLang}>
            {props.isLang === false ? props.langBtnNames[0] : props.langBtnNames[1]}
        </button>
    )
}

export default ButtonRuEn