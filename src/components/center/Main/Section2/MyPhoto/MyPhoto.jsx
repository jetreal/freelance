import React from 'react';
import styles from './myPhoto.module.sass'

const MyPhoto = (props) => {
    return (
        <div className={styles.myPhoto}>
            <img src={'images/jewel.jpg'} alt=''/>
        </div>
    )
}

export default MyPhoto