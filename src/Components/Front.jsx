import React from 'react'
import styles from './Front.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXTwitter ,faLinkedinIn ,  faGithub ,faInstagram} from '@fortawesome/free-brands-svg-icons'
import { faDownload } from '@fortawesome/free-solid-svg-icons';

// for animations
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();


export const Front = () => {
  return (
    <div id="Front" className={styles.body}>
      <div className={`${styles.intro}`}>
        <div className={`${styles.intro_text}`}>
          <h3 data-aos="fade-up" className={`${'text-light'} ${'ms-2'} ${styles.hov_t}`}>I am Kartik Sharma</h3>
          <h1 data-aos="fade-down" className={`${styles.hov_t}`}>Java Full Stack <br/> Developer</h1>
          <h5 data-aos="fade-down" className={`${styles.hov_t} ${'mt-3'}`}>
            Crafting seamless web experiences from front to back with Java expertise! Passionate about building
            innovative and scalable solutions
          </h5>

          <div className={`${styles.intro_buttons} ${'mt-4'}`}>
            <button className={`${styles.btnn} ${styles.hov_b}`}>Download CV <FontAwesomeIcon  icon={faDownload} /></button>
            <div className={styles.icons_parent}>
           <a target="_blank" href="https://x.com/KartikSharma_17"><FontAwesomeIcon className={`${styles.icons} ${styles.hov_b}`} icon={faXTwitter} /></a> 
            <a target="_blank" href="https://www.linkedin.com/in/kartik-sharma-a82482261/"><FontAwesomeIcon className={`${styles.icons} ${styles.hov_b}`} icon={faLinkedinIn} /></a>
            <a target="_blank" href="https://github.com/kartik-sharma17"><FontAwesomeIcon className={`${styles.icons} ${styles.hov_b}`} icon={faGithub} /></a>
            <a target="_blank" href="https://www.instagram.com/kartik_sharma__17/"><FontAwesomeIcon className={`${styles.icons} ${styles.hov_b}`} icon={faInstagram} /></a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.intro_image}>

      </div>

    </div>
  )
}
