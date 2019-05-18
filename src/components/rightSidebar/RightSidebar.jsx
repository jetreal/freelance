import React from 'react'
import styles from './rightSidebar.module.sass'

const RightSidebar = (props) => {
    return (
        <div className={styles.rightSidebar}>
            <div className={styles.wrapperBtn}>
                <button className={styles.button1}>    
                    click 1
                </button>
                <button className={styles.button2}>    
                    click 2
                </button>
                <button className={styles.button3}>    
                    click 3
                </button>
                <button className={styles.button4}>    
                    click 4
                </button>
                <button className={styles.button5}>    
                    click 5
                </button>
                <button className={styles.button6}>    
                    click 6
                </button>

            </div>
        </div>
    )
}

export default RightSidebar