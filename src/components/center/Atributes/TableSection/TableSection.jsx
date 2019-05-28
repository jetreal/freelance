import React from 'react'
import styles from './tableSection.module.sass'

const TableSection = (props) => {
    return (
        <div className={styles.tableSection}>
            {props.children}
        </div>
    )
}
export default TableSection