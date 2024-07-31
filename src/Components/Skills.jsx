import React from 'react'
import styles from './Skills.module.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons'
import { faHtml5 ,faCss3 ,faSquareJs,faReact , faBootstrap } from '@fortawesome/free-brands-svg-icons'

export const Skills = () => {
    return (
        <div className={styles.body}>
            <div className={styles.skills_text}>
                <h1>My Skills</h1>
                <p className='text-center'>Here Are Some Skills I Worked On To Provide Solution To Multiple Frontend
                    <br />And Backend Related Problems.</p>
            </div>

            <div className={styles.skills_icons}>
                <div className={`${styles.front_end} ${styles.skills_container}`}>
                    <div className="skills_container_text">
                    <h2 className='text-center'>Front End</h2>
                    </div>
                    <div className="skills_container_icons">
                    <FontAwesomeIcon className={styles.icons} style={{color: '#ddae03'}} icon={faHtml5} />
                    <FontAwesomeIcon className={styles.icons} style={{color: '#2d53e4'}} icon={faCss3} />
                    <FontAwesomeIcon className={styles.icons} style={{color: '#ddae03'}} icon={faSquareJs} />
                    <FontAwesomeIcon className={styles.icons} style={{color: '#ddae03'}} icon={faReact} />
                    <FontAwesomeIcon className={styles.icons} style={{color: '#ddae03'}} icon={faBootstrap} />
                    {/* <FontAwesomeIcon className={styles.icons} style={{color: '#ddae03'}} icon={faHtml5} /> */}
                    </div>
                </div>
                <div className={`${styles.back_end}`}></div>
                <div className={styles.databases_end}></div>
                <div className={styles.others_end}></div>
            </div>
        </div>
    )
}
