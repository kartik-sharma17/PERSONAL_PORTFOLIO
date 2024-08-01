import React from 'react'
import styles from './Education.module.css'; 
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-regular-svg-icons'


export const Experiance = () => {
  return (
    <div className={styles.body}>
        <div className={styles.heading}>
        <FontAwesomeIcon className={styles.icons} icon={faStar} />
        <h1>My Experiance</h1>
        </div>
        <div className={styles.timeline} class="text-light">
            <div className={styles.check_points}>   
                <h2>2022 - 2025</h2>
                <h3 className='mt-2'>B.Tech in Computer Science Engineering</h3>
                <h4 className='mt-2'>Hi-Tech Institute Of Engineering & Technology</h4>
            </div>
            <div className={styles.check_points}>
                <h2>2019 - 2022</h2>
                <h3 className='mt-2'>Diploma in Electrical Engineering</h3>
                <h4 className='mt-2'>New Era Collage Of Science & Technology</h4>
            </div>
        </div>
    </div>
  )
}
