import React from 'react'
import styles from './center.module.sass'

const Center = (props) => {
    return (
        <div className={styles.center}>
            <div className={styles.topMidlware}>
            
            </div>
            <div className={styles.main}>
                <p>
                    Lorem ipsum dolor sit, amet consectetur
                     adipisicing elit. Quis consectetur nesciunt
                      accusamus aut eligendi incidunt beatae eos sapiente
                       nisi laboriosam eius, eum, tenetur vel necessitatibus possimus
                        doloremque? In, ratione non!
                </p>
                
            </div>

            <div className={styles.attributes}>
                <div className={styles.table}>
                    <img src={require('../../images/table.png')} />
                </div>
                <div className={styles.sofa}>
                    <div className={styles.wrappTV}>
                        <div className={styles.tv}>
                            <img className={styles.tvImg} src={require('../../images/Center.jpg')} />
                        </div>
                    </div>

                    <img className={styles.sofaImg} src={require('../../images/sofa.png')} />
                </div>
                <div className={styles.cupboard}>
                {/* <img src={require('../../images/cupboard.png')} /> */}
                 
                </div>
            </div>
        </div>
    )
}

export default Center