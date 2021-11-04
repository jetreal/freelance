import React from 'react'
import styles from './downPhoneNumber.module.sass'

const DownPhoneNumber = (props) => {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
    return (
      <div className={styles.tvPhoneNumber}>
        <p className={styles.letCall}>позвонить:</p>
        <a href="tel:+79529645721">
          <button>
            <span>8 952 964 57 21</span>
          </button>
        </a>
      </div> 
    )
  } else {
    return (
      <div className={styles.tvPhoneNumber}>
        <p className={styles.letCall}>позвонить:</p>
        {/* <a href="tel:+79529645721"> */}

          <button>
            <span>8 952 964 57 21</span>
          </button>
        {/* </a> */}
      </div> 
    )
  }
}

export default DownPhoneNumber