import React from 'react'
import styles from './headerText.module.sass'

const HeaderText = (props) => {
    return (
        <div className={styles.headerText}>
                    <p>
                        {props.isLang === false ?
                            props.texts[props.btnIndex - 1].textRu :
                            props.texts[props.btnIndex - 1].textEn}

                    </p>
                </div>
    )
}

export default HeaderText