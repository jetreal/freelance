import React from 'react';
import styles from './mapPoint.module.sass'

export default (props) => {
    return (
        <div className={styles.mapPoint}
            onClick={props.tvIndex % 2 !== 0 ? props.showMap : null}
            style={props.tvIndex % 2 === 0 ? { cursor: 'no-drop' } : {}}>

            <img src={'/images/mapPoint.png'} />
        </div>
    )
}