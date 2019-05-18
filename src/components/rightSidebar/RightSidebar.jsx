import React from 'react'
import styles from './rightSidebar.module.sass'
import Button from './button/Button';





const RightSidebar = (props) => {

    console.log(props.buttons)

        let btns = props.buttons.map( (b) => {
            return <Button key={b.id}
                           name={b.name} 
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