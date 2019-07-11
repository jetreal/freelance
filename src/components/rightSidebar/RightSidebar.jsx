import React from 'react'
import styles from './rightSidebar.module.sass'
import Button from './button/Button';
import { FaHome, FaRegUser, FaRegComment, FaBalanceScale, FaRegCheckCircle, FaInfo } from 'react-icons/fa';

const icons = [FaHome, FaRegUser, FaRegComment, FaBalanceScale, FaRegCheckCircle, FaInfo ]

const RightSidebar = (props) => {
        let btns = props.buttons.buttons.map( (b, index) => {
            return <Button key={b.id}
                           name={icons[index]()}
                           checked={b.isActiveColor} 
                           handleClick={props.handleClick.bind(this, b.id)}/>
        } )


    return (
        <div className={styles.rightSidebar}>
            <div className={styles.wrapperBtn}>
                {btns}
            </div>
        </div>
    )
}

export default RightSidebar