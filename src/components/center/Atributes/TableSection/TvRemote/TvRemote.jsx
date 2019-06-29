import React from 'react';
import styles from './tvRemote.module.sass'

const TvRemote = (props) => {
    return (
        <div className={styles.wrappTvRemote}>
            <img onClick={props.isShowMap === false ? props.changeTV : null}
                style={props.isShowMap === true ? {cursor: 'no-drop'} : {}}
                className={styles.tvRemote} src={'images/tvRemote.png'} />
        </div>
    )
}

export default TvRemote