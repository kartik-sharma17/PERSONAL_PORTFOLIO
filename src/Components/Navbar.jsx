import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './Navbar.module.css'
import {Link} from 'react-router-dom'

export const Navbar = () => {
  return (
    <>
    <div className={styles.body}>
        <div className={styles.nav1}>
            <h2>Contactkartikforwork2gmail.com</h2>
        </div>
        <div className={styles.nav2}>
            <a href='#Front' className={`${styles.anchor} ${styles.home_btn}`}>Home</a>
            <a href="#Education" className={styles.anchor}>Education</a>
            <a href="#Skills" className={styles.anchor}>Skills</a>
            <a href="#Experiance" className={styles.anchor}>Experiance</a>
            <a href="#Projects" className={styles.anchor}>Projects</a>
            <a href="#Contact" className={styles.anchor}>Contact</a>
            <a href="#" className={`${styles.hire_me}`}>Hire Me!</a>
              
        </div>
    </div>
    </>
  )
}
