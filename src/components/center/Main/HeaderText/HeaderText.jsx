import React from 'react'
import styles from './headerText.module.sass'
import { StyledP } from './headerTextStyled';

const HeaderText = (props) => {
    return (
        <div className={styles.headerText}>

            <StyledP btnIndex={props.btnIndex}>
            
                {props.isLang === false ?
                    props.texts[props.btnIndex - 1].textRu :
                    props.texts[props.btnIndex - 1].textEn}
            </StyledP>

          

        

        </div>
    )
}

export default HeaderText