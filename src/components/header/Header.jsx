import React from 'react'
import styles from './header.module.sass'

const Header = (props) => {
    console.log(props)
    return (
        <div className={styles.header}>
            <div className={styles.topMiddleware}>
                <div className={styles.langBtnWrapp}>
                    <button className={styles.langBtn}>
                        ru
                    </button>
                </div>
                <p>
                    Sozdanie saitov
                </p>
                <div>
                    <p> 8-952-964-57-21</p>
                </div>
            </div>
            <img src={require('../../images/ceiling.jpg')}/>
        </div>
    )
}

export default Header