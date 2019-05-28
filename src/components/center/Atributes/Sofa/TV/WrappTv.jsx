import React from 'react'
import styles from './wrappTv.module.sass'

const WrappTv = (props) => {
    return (
        <div className={styles.wrappTV}>
            {props.children}
        </div>
    )
}

export default WrappTv