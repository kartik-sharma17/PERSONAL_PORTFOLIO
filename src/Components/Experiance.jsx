import React from 'react'
import styles from './Experiance.module.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-regular-svg-icons'

// for animations
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();


export const Experiance = () => {
    return (

        <div id='Experiance' className={styles.body}>
            <div className={styles.heading}>
                <FontAwesomeIcon data-aos="fade-up" className={styles.icons} icon={faStar} />
                <h1 data-aos="fade-up"> My Experience</h1>
            </div>

            <div className={styles.check_points_box}>
                <div data-aos="slide-left" className={styles.check_points}>
                    <h2>Aug 24 - Present</h2>
                    <h3 className='mt-2'>Java Full Stack Developer</h3>
                    <h4 className='mt-2'>Freelance</h4>
                </div>
            </div>

            <div className={styles.check_points_box}>
                <div data-aos="slide-right" className={styles.check_points}>
                    <h2>July 24 - Aug 24</h2>
                    <h3 className='mt-2'>Web development Intern</h3>
                    <h4 className='mt-2'>TechnoHacks EduTech</h4>
                </div>
            </div>

            <div className={styles.check_points_box}>
                <div data-aos="slide-left" className={styles.check_points}>
                    <h2>Feb 24 - July 24</h2>
                    <h3 className='mt-2'>Full Stack Web Developer</h3>
                    <h4 className='mt-2'>Freelance</h4>
                </div>
            </div>

            <div className={styles.forextramargin}></div>
        </div>

    )
}
