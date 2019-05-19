import React from 'react'
import styles from './main.module.sass'


const Main = (props) => {
    console.log(props)
    return (
        <div className={styles.main}>

            <p>
                {props.texts[props.btnIndex - 1].textRu}
        </p>
            <div>


            </div>
        </div>
    )
}
export default Main