import React from 'react'
import styles from './Skills.module.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons'
// import { faHtml5 ,faCss3 ,faSquareJs,faReact , faBootstrap } from '@fortawesome/free-brands-svg-icons'

export const Skills = () => {
    return (
        <div id='Skills' className={styles.body}>
            <div className={styles.skills_text}>
                <h1>My Skills</h1>
                <p className='text-center'>Here Are Some Skills I Worked On To Provide Solution To Multiple Frontend
                    <br />And Backend Related Problems.</p>
            </div>


            <div className={`${styles.front_end} ${styles.skills_container}`}>
                <h2 className='text-center'>Front End</h2>
                <div className={styles.skills_container_icons}>
                    <div className={`${styles.icons_img} ${styles.icon_1}`}></div>
                    <div className={`${styles.icons_img} ${styles.icon_2}`}></div>
                    <div className={`${styles.icons_img} ${styles.icon_3}`}></div>
                    <div className={`${styles.icons_img} ${styles.icon_4}`}></div>
                    <div className={`${styles.icons_img} ${styles.icon_5}`}></div>
                    <div className={`${styles.icons_img} ${styles.icon_6}`}></div>
                    <div className={`${styles.icons_img} ${styles.icon_7}`}></div>
                </div>
            </div>

            <div className={`${styles.back_end} ${styles.skills_container}`}>
                <h2 className='text-center'>Back End</h2>
                <div className={styles.skills_container_icons}>
                    <div className={`${styles.icons_img} ${styles.icon_9}`}></div>
                    <div className={`${styles.icons_img} ${styles.icon_10}`}></div>
                    <div className={`${styles.icons_img} ${styles.icon_11}`}></div>
                    <div className={`${styles.icons_img} ${styles.icon_12}`}></div>
                    <div className={`${styles.icons_img} ${styles.icon_13}`}></div>
                    <div className={`${styles.icons_img} ${styles.icon_14}`}></div>
                    <div className={`${styles.icons_img} ${styles.icon_15}`}></div>
                </div>
            </div>

            <div className={`${styles.others} ${styles.skills_container}`}>
                <h2 className='text-center'>Others</h2>
                <div className={styles.skills_container_icons}>
                    <div className={`${styles.icons_img} ${styles.icon_16}`}></div>
                    <div className={`${styles.icons_img} ${styles.icon_17}`}></div>
                    <div className={`${styles.icons_img} ${styles.icon_18}`}></div>
                    <div className={`${styles.icons_img} ${styles.icon_19}`}></div>
                    <div className={`${styles.icons_img} ${styles.icon_20}`}></div>
                    <div className={`${styles.icons_img} ${styles.icon_21}`}></div>
                    <div className={`${styles.icons_img} ${styles.icon_22}`}></div>
                    <div className={`${styles.icons_img} ${styles.icon_23}`}></div>
                </div>
            </div>


        </div>
    )
}
