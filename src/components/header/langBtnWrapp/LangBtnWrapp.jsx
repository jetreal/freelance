import React from 'react'
import styles from './langBtnWrapp.module.sass'

const LangBtnWrapp = (props) => {
    return (
        <div className={styles.langBtnWrapp}>
            {props.children}
        </div>
    )
}

export default LangBtnWrapp