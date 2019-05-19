import React from 'react'
import styles from './atributes.module.sass'


const Atributes = (props) => {
    return (
        <div className={styles.attributes}>
            <div className={styles.tableSection}>
                <img className={styles.miniTable} src={require('../../../images/table.png')} />
                <div className={styles.wrappTvRemote}>
                    <img className={styles.tvRemote} src={'/images/tvRemote.png'}/>
                </div>
            </div>
            <div className={styles.sofa}>
                <div className={styles.wrappTV}>
                    <div className={styles.tv}>
                        <img className={styles.tvImg} src={require('../../../images/1.jpg')} />
                    </div>
                </div>

                <img className={styles.sofaImg} src={require('../../../images/sofa.png')} />
                
            </div>
            <div className={styles.cupboard}>

            </div>
        </div>
    )
}

export default Atributes 