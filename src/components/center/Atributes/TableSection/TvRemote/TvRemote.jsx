import React from 'react';
import styles from './tvRemote.module.sass'

const TvRemote = (props) => {
    return (
        <div className={styles.wrappTvRemote}>
            <img onClick={props.changeTV}
                className={styles.tvRemote} src={'/images/tvRemote.png'} />
        </div>
    )
}

export default TvRemote