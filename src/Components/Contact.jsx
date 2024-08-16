import React, { useState } from 'react'
import styles from './Contact.module.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import emailjs from '@emailjs/browser';


// for animation library
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();


export const Contact = () => {

    const [first_name,setFirst_Name] = useState("");
    const [last_name,setLast_Name] = useState("");
    const [email,setemail] = useState("");
    const [number,setnumber] = useState("");
    const [message,setmessage] = useState("");
    


    const send = (e)=>{
        e.preventDefault();
        const data = {
            first_name,
            last_name,
            email,
            number,
            message
        }
        emailjs.send("service_l529h8s","template_a9pon8g",data,"GbOByxL8hPywLDFDg").then
        (()=>{alert("Message Send Successfully You will Get a confirmation email soon")},(error)=>{
            alert("Failed Please Try again"+error);
        })
        ;
    }


    return (
        <div id='Contact' className={styles.body}>

            <form onSubmit={send} data-aos="slide-right">
                <h1>Let's Work Together!</h1>
                <p>
                    I am passionate about coding and love creating innovative and exciting projects
                    that push the boundaries of technology.
                </p>
                <div className={styles.form_name}>
                    <input placeholder='First Name' onChange={(e)=>{setFirst_Name(e.target.value)}} />
                    <input placeholder='Last Name' onChange={(e)=>{setLast_Name(e.target.value)}} />
                </div>
                <div className={styles.form_contact}>
                    <input placeholder='Email Address' onChange={(e)=>{setemail(e.target.value)}}/>
                    <input placeholder='Phone Number' onChange={(e)=>{setnumber(e.target.value)}} />
                </div>
                <textarea placeholder='Message' onChange={(e)=>{setmessage(e.target.value)}} />
                <button className={styles.butt}>Send Message</button>
            </form>

            <div className={styles.contact_text}>
                <div data-aos="slide-left" className={styles.email}>
                    <FontAwesomeIcon className={styles.icon} icon={faEnvelope} />
                    <div className={styles.text}>
                        <h3>Email</h3>
                        <h2>Contactkartikforwork@gmail.com</h2>
                    </div>
                </div>

                <div data-aos="slide-left" className={styles.address}>
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
