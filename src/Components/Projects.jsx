import React from 'react'
import './Projects.css'
import styles from './Projects.module.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route , NavLink} from 'react-router-dom'
import {Web} from './Projects_navi/Web'
import {Android} from './Projects_navi/Android'
import {All} from './Projects_navi/All'



export const Projects = () => {
  return (
    <div id='Projects' className={styles.body}>
      <div className={`${styles.introtext}`}>
        <h1>My Recent Projects</h1>
        <p>Passionate about developing new and innovative projects that push the boundaries of 
          technology and creativity.
        </p>
      </div>
      <div className={styles.nav}>
        <NavLink className={styles.options} to=''>All</NavLink>
        <NavLink className={styles.options} to='/Web'>Web</NavLink>
        <NavLink className={styles.options} to='/Android'>Android</NavLink>
      </div>
      <div className={styles.nav_show}>
          <Routes>
            <Route path='' element={<All/>} />
            <Route path='/Web' element={<Web/>} />
            <Route path='/Android' element={<Android/>} />
          </Routes>
      </div>
    </div>
  )
}
