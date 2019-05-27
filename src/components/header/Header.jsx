import React from 'react'
import styles from './header.module.sass'

import ButtonRuEn from './ButtonRuEn/ButtonRuEn';
import HeaderText from './HeaderText/HeaderText';
import PhoneNumber from './PhoneNumber/PhoneNumber';
import LangBtnWrapp from './langBtnWrapp/LangBtnWrapp';
import WrapperGrid from './WrapperGrid/WrapperGrid';


const Header = (props) => {
    return (
        <div className={styles.header}>

            {/* <div className={styles.wrapperGrid}> */}
            <WrapperGrid>
                <LangBtnWrapp>
                    <ButtonRuEn isLang={props.isLang}
                        langBtnNames={props.langBtnNames}
                        changeLang={props.changeLang} />
                </LangBtnWrapp>

                <HeaderText isLang={props.isLang} headerText={props.headerText} />
                <PhoneNumber phoneNum={props.phoneNum} />
            </WrapperGrid>


            {/* </div> */}
            <img src={'/images/ceiling.jpg'} />
        </div>
    )
}

export default Header