import React from 'react'
import styles from './Contact.module.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';

export const Contact = () => {
    return (
        <div id='Contact' className={styles.body}>

            <form>
                <h1>Let's Work Together!</h1>
                <p>
                    I am passionate about coding and love creating innovative and exciting projects
                    that push the boundaries of technology.
                </p>
                <div className={styles.form_name}>
                    <input placeholder='First Name' />
                    <input placeholder='Last Name' />
                </div>
                <div className={styles.form_contact}>
                    <input placeholder='Email Address' />
                    <input placeholder='Phone Number' />
                </div>
                <textarea placeholder='Message' />
                <button className={styles.butt}>Send Message</button>
            </form>

            <div className={styles.contact_text}>
                <div className={styles.email}>
                    <FontAwesomeIcon className={styles.icon} icon={faEnvelope} />
                    <div className={styles.text}>
                        <h3>Email</h3>
                        <h2>Contactkartikforwork@gmail.com</h2>
                    </div>
                </div>

                <div className={styles.address}>
                    <FontAwesomeIcon className={styles.icon} icon={faLocationDot} />
                    <div className={styles.text}>
                        <h3>Address</h3>
                        <h2>Govindpuram Ghaziabad</h2>
                    </div>

                </div>
            </div>
        </div>
    )
}
