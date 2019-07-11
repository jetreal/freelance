import React from 'react'
import styles from './soundLeft.module.sass'

const SoundLeft = (props) => {
    return (
        <div className={styles.soundLeft}>
            <img className={styles.soundLeftImg} src={'images/soundRight.webp'} alt='' />
        </div>
    )
}

export default SoundLeft