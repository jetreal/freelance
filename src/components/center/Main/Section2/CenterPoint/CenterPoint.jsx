import React from 'react'
import styles from './centerPoint.module.sass'

export default (props) => {
    return (
        <div className={styles.centerPoint}
            onClick={props.pointsPositionWithDelay === props.pointsPosition ? props.changePointsPlace : null}>
            <img className={styles.hour24} src={'/images/hours.png'} />
        </div>
    )
}