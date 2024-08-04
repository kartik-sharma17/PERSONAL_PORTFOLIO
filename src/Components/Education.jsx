import React from 'react'
import styles from './Education.module.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons'

// for animation library
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

export const Education = () => {
    return (

        <div id='Education' className={styles.body}>
            <div className={styles.heading}>
                <FontAwesomeIcon data-aos="fade-up" className={styles.icons} icon={faUserGraduate} />
                <h1 data-aos="fade-up"> My Education</h1>
            </div>

            <div className={styles.check_points_box}>
                <div data-aos="slide-left" className={styles.check_points}>
                    <h2>2022 - 2025</h2>
                    <h3 className='mt-2'>B.Tech in Computer Science Engineering</h3>
                    <h4 className='mt-2'>Hi-Tech Institute Of Engineering & Technology</h4>
                </div>
            </div>

            <div className={styles.check_points_box}>
                <div data-aos="slide-right" className={styles.check_points}>
                    <h2>2019 - 2022</h2>
                    <h3 className='mt-2'>Diploma in Electrical Engineering</h3>
                    <h4 className='mt-2'>New Era Collage Of Science & Technology</h4>
                </div>
            </div>

            <div  className={styles.check_points_box}>
                <div data-aos="slide-left" className={styles.check_points}>
                    <h2>2019</h2>
                    <h3 className='mt-2'>High School</h3>
                    <h4 className='mt-2'>Dehradun Public School Ghaziabad</h4>
                </div>
            </div>

            <div className={styles.forextramargin}></div>
        </div>

    )
}
