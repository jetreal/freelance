import React from 'react'
import styles from './atributes.module.sass'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


const Atributes = (props) => {
    console.log(props)
    return (
        <div className={styles.attributes}>
            <div className={styles.tableSection}>
                <div className={styles.soundLeft}>
                    <img className={styles.soundLeftImg} src={'../../../images/soundRight.jpg'} />
                </div>
                <img className={styles.miniTable} src={require('../../../images/table.png')} />
                <div className={styles.wrappTvRemote} >
                    <img onClick={props.changeTV}
                        className={styles.tvRemote} src={'/images/tvRemote.png'} />
                </div>
            </div>
            <div className={styles.sofa}>
                <div className={styles.wrappTV}>

                    <div className={styles.tv}>
                        {/* <img className={styles.tvImg} src={`/images/${props.tvIndex + 1}.jpg`} /> */}
                            <video className={styles.tvImg} 
                                    src={`/video/${props.tvIndex}.mp4`} 
                                    autoPlay
                                  
                            ></video>
                    </div>

                </div>

                <img className={styles.sofaImg} src={require('../../../images/sofa.png')} />

            </div>
            <div className={styles.soundRight}>
                <img className={styles.soundRightImg} src={'../../../images/soundLeft.jpg'} />
            </div>
        </div>
    )
}

export default Atributes 