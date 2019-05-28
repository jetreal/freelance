import React from 'react'
import styles from './tv.module.sass'

const Tv = (props) => {
    return (
        <div className={styles.tv}>
            <video className={styles.tvImg}
                src={`/video/${props.tvIndex}.mp4`}
                autoPlay
            ></video>
        </div>
    )
}

export default Tv