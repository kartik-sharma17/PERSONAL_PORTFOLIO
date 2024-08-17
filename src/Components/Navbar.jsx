import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

// for animation library
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

export const Navbar = () => {

  const [value, setValue] = useState(true);
  function bars() {
    if (value == true) {
      setValue(false);
    }
    else {
      setValue(true);
    }
  }

  const [color, Setcolor] = useState(false);

  const changecolor = () => {
    if (window.scrollY >= 320) {
      Setcolor(true)
    }
    else {
      Setcolor(false);
    }
  }

  // to call the function on scroll
  window.addEventListener('scroll', changecolor)

  return (
    <>
      <div className={color ? styles.body_change : styles.body}>
        <div className={styles.nav1}>
          <h2>Contactkartikforwork@gmail.com</h2>
        </div>
        <div className={styles.nav2}>
          <a href='#Front' className={`${styles.anchor} ${styles.home_btn}`}>Home</a>
          <a href="#Education" className={styles.anchor}>Education</a>
          <a href="#Skills" className={styles.anchor}>Skills</a>
          <a href="#Experience" className={styles.anchor}>Experience</a>
          <a href="#Projects" className={styles.anchor}>Projects</a>
          <a href="#Contact" className={styles.anchor}>Contact</a>
          <a href="#Contact" className={`${styles.hire_me}`}>Hire Me!</a>
        </div>
        <div className={styles.responsive_icons}>
          <div className={value ? styles.nav3 : styles.nav3_change}>
            <div className={styles.nav3_2}>
              <a href='#Front' className={`${styles.anchor} ${styles.home_btn}`}>Home</a>
              <a href="#Education" className={styles.anchor}>Education</a>
              <a href="#Skills" className={styles.anchor}>Skills</a>
              <a href="#Experience" className={styles.anchor}>Experience</a>
              <a href="#Projects" className={styles.anchor}>Projects</a>
              <a href="#Contact" className={styles.anchor}>Contact</a>
              <a href="#Contact" className={`${styles.hire_me}`}>Hire Me!</a>
            </div>
            <FontAwesomeIcon className={styles.bars} icon={faBars} onClick={bars} />
          </div>
        </div>
      </div>
    </>
  )
}
