import React from 'react'
import styles from './Footer.module.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXTwitter, faLinkedinIn, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'



export const Footer = () => {
    return (
        <div className={`${styles.footer_main}`} >
            <h2 className='mt-4'>Kartik Sharma</h2>
            <div className={styles.footer_nav} class="mt-4">
                <a className={styles.anch} href='#Front'>Home</a>
                <a className={styles.anch} href='#Education'>Education</a>
                <a className={styles.anch} href='#Skills'>Skills</a>
                <a className={styles.anch} href='#Projects'>Projects</a>
                <a className={styles.anch} href='#Experience'>Experience</a>
                <a className={styles.anch} href='#Contact'>Contact</a>
            </div>
            <div className={styles.footer_icons}>
                <a target="_blank" href="https://x.com/KartikSharma_17"><FontAwesomeIcon className={styles.icons} icon={faXTwitter} /> </a>
                <a target="_blank" href="https://www.linkedin.com/in/kartik-sharma-a82482261/"><FontAwesomeIcon className={styles.icons} icon={faLinkedinIn} /></a>
                <a target="_blank" href="https://github.com/kartik-sharma17"><FontAwesomeIcon className={styles.icons} icon={faGithub} /></a>
                <a target="_blank" href="https://www.instagram.com/kartik_sharma__17/"><FontAwesomeIcon className={styles.icons} icon={faInstagram} /></a>
            </div>
            <h5 className='mt-4'>2024 All rights reserved</h5>
        </div>
    )
}
