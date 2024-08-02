import React from 'react'
import styles from './Front.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXTwitter ,faLinkedinIn ,  faGithub ,faInstagram} from '@fortawesome/free-brands-svg-icons'
import { faDownload } from '@fortawesome/free-solid-svg-icons';


export const Front = () => {
  return (
    <div className={styles.body}>
      <div className={`${styles.intro} ${'mt-5'}`}>
        <div className={`${styles.intro_text}`}>
          <h3 className={`${'text-light'} ${'ms-2'} ${styles.hov_t}`}>I am Kartik Sharma</h3>
          <h1 className={`${styles.hov_t}`}>Java Full Stack <br/> Developer</h1>
          <h5 className={`${styles.hov_t} ${'mt-3'}`}>
            Crafting seamless web experiences from front to back with Java expertise! Passionate about building
            innovative and scalable solutions
          </h5>

          <div className={`${styles.intro_buttons} ${'mt-4'}`}>
            <button className={`${styles.btnn} ${styles.hov_b}`}>Download CV <FontAwesomeIcon  icon={faDownload} /></button>
            <div className={styles.icons_parent}>
            <FontAwesomeIcon className={`${styles.icons} ${styles.hov_b}`} icon={faXTwitter} />
            <FontAwesomeIcon className={`${styles.icons} ${styles.hov_b}`} icon={faLinkedinIn} />
            <FontAwesomeIcon className={`${styles.icons} ${styles.hov_b}`} icon={faGithub} />
            <FontAwesomeIcon className={`${styles.icons} ${styles.hov_b}`} icon={faInstagram} />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.intro_image}>

      </div>
    </div>
  )
}
