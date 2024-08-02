import React from 'react'
import styles from './Footer.module.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXTwitter ,faLinkedinIn ,  faGithub ,faInstagram} from '@fortawesome/free-brands-svg-icons'



export const Footer = () => {
    return (
        <div className={`${styles.footer_main}`} >
            <h2 className='mt-4'>Kartik Sharma</h2>
            <div className={styles.footer_nav} class="mt-4">
                <a className={styles.anch} href='#'>Home</a>
                <a className={styles.anch} href='#'>Education</a>
                <a className={styles.anch} href='#'>Skills</a>
                <a className={styles.anch} href='#'>Projects</a>
                <a className={styles.anch} href='#'>Experience</a>
                <a className={styles.anch} href='#'>Contact</a>
            </div>
            <div className={styles.footer_icons}>
                <FontAwesomeIcon className={styles.icons} icon={faXTwitter} />
                <FontAwesomeIcon className={styles.icons} icon={faLinkedinIn} />
                <FontAwesomeIcon className={styles.icons} icon={faGithub} />
                <FontAwesomeIcon className={styles.icons} icon={faInstagram} />
            </div>
            <h5 className='mt-4'>2024 All rights reserved</h5>
        </div>
    )
}
