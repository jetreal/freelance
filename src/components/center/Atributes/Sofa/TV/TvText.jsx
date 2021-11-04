import React from 'react'
import styles from './tvText.module.sass'

const TvText = (props) => {
  return (
    <>
      <p className={styles.tvText}>
        {props.isLang === true ?
          props.textsForTvset[0] : 
          props.textsForTvset[1] }
      </p>
    </>
  )
}

export default TvText










