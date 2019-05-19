import React from 'react'
import styles from './center.module.sass'
import Main from './Main/Main';
import Atributes from './Atributes/Atributes';



const Center = (props) => {
    console.log(props)
    let x = props.buttons.activeButtonNum
    return (
        <div className={x !== 1 ? styles.center : styles.center2}
             style={ {backgroundImage:  `url(/images/${x}.jpg)` } } >
            <div className={styles.topMidlware}>

         </div>
         <Main btnIndex ={props.buttons.activeButtonNum}
               texts={props.buttons.texts} />
         <Atributes />

        </div>
    )
}

export default Center