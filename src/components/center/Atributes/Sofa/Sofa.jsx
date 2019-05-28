import React from 'react'
import styles from './sofa.module.sass'

const Sofa = (props) => {
    return (
        <div className={styles.sofa}>
            {props.children}
        </div>
    )
}

export default Sofa