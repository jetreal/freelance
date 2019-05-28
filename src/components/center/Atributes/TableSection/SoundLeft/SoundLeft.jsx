import React from 'react'
import styles from './soundLeft.module.sass'

const SoundLeft = (props) => {
    return (
        <div className={styles.soundLeft}>
            <img className={styles.soundLeftImg} src={'/images/soundRight.jpg'} />
        </div>
    )
}

export default SoundLeft