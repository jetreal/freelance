import React from 'react'
import styles from './wrapperGrid.module.sass'

const WrapperGrid = (props) => {
    return (
        <div className={styles.wrapperGrid}>
            {props.children}
        </div>
    )
}

export default WrapperGrid