import React from 'react'
import styles from './header.module.sass'

const Header = (props) => {
    console.log(props)
    return (
        <div className={styles.header}>
            <div className={styles.topMiddleware}>
                <div className={styles.langBtnWrapp}>
                    <button className={styles.langBtn}
                            onClick={props.changeLang}>
                        {props.isLang === false ? props.langBtnNames[0] : props. langBtnNames[1]}
                    </button>
                </div>
                <p>
                    {props.isLang === false ? props.headerText[0] : props. headerText[1]}
                </p>
                <div>
                    <p>
                        {props.phoneNum}
                    </p>
                </div>
            </div>
            <img src={require('../../images/ceiling.jpg')} />
        </div>
    )
}

export default Header