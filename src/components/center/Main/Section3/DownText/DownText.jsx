import React from 'react'
import styles from './downText.module.sass'

export default (props) => {
    return (
    <div className={styles.downTextDiv}>
        <p>
            {props.isLang === false ? props.section3DownText[0]: props.section3DownText[1] }
        </p>
    </div>
    )
}