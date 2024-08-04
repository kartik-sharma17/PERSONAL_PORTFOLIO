import React from 'react'
import styles from './All.module.css'
import { faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


// for animation library
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();



export const Android = () => {
  return (
    <div className={styles.body}>

      {/* <div className={styles.row1}>
        
        <div className={`${styles.p} `}>
          <div className={`${styles.p1}`}>
            <div className={styles.anchor}>
              <a className href='#'>
                <h2>Portfolio</h2>
                <p>Porject is About Showcase My Work</p>
              </a>
            </div>
          </div>
        </div>

        <div className={`${styles.p} `}>
          <div className={`${styles.p2}`}>
            <div className={styles.anchor}>
              <a className href='#'>
                <h2>Cricket Stats</h2>
                <p>Porject is About Showcase Cricket Stats</p>
              </a>
            </div>
          </div>
        </div>

      </div> */}

      <div className={styles.row2}>

        {/* <div className={`${styles.p} `}>
          <div className={`${styles.p3}`}>
            <div className={styles.anchor}>
              <a className href='#'>
                <h2>Food Ordering</h2>
                <p>Porject is About Online Food Ordering System</p>
              </a>
            </div>
          </div>
        </div> */}

        <div data-aos="slide-left" className={`${styles.p} `}>
          <div className={`${styles.p4}`}>
            <div className={styles.anchor}>
            <a className={styles.aa} href='#'>
                <div >
                  <h2>Android App</h2>
                  <p>UnderDevelopment</p>
                </div>
                <FontAwesomeIcon className={styles.icon} icon={faSquareArrowUpRight} />
              </a>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}
