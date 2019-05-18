import React from 'react'
import styles from './header.module.sass'

const Header = (props) => {
    return (
        <div className={styles.header}>
            <img src={require('../../images/ceiling.jpg')}/>
        </div>
    )
}

export default Header