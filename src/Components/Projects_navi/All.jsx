import React from 'react'
import styles from './All.module.css'


export const All = () => {
  return (
    <div className={styles.body}>
      <div className={styles.row1}>
        <div className={`${styles.p} `}>
          <div className={`${styles.p1}`}>

          </div>
        </div>
        <div className={`${styles.p}`}>
          <div className={`${styles.p2}`}>

          </div>
        </div>
      </div>

      <div className={styles.row2}>
        <div className={`${styles.p} ${styles.p3}`}></div>
        <div className={`${styles.p} ${styles.p4}`}></div>
      </div>
    </div>
  )
}
