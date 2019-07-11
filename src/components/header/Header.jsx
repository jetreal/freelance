import React from 'react'
import styles from './header.module.sass'

import HeaderText from './HeaderText/HeaderText';
import PhoneNumber from './PhoneNumber/PhoneNumber';
import LangBtnWrapp from './langBtnWrapp/LangBtnWrapp';
import WrapperGrid from './WrapperGrid/WrapperGrid';
import ButtonRuEn from './langBtnWrapp/ButtonRuEn/ButtonRuEn';


const Header = (props) => {
    return (
        <div className={styles.header}>
  
            <WrapperGrid>
                <LangBtnWrapp>
                   <ButtonRuEn isLang={props.isLang}
                        langBtnNames={props.langBtnNames}
                        changeLang={props.changeLang} />
                </LangBtnWrapp>
                <HeaderText isLang={props.isLang} headerText={props.headerText} />
                <PhoneNumber phoneNum={props.phoneNum} />
            </WrapperGrid>

            <img src={'images/ceiling.webp'} alt=''/>
        </div>
    )
}

export default Header