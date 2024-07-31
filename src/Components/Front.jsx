import React from 'react'
import './Front.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXTwitter ,faLinkedinIn ,  faGithub ,faInstagram} from '@fortawesome/free-brands-svg-icons'
import { faDownload } from '@fortawesome/free-solid-svg-icons';


export const Front = () => {
  return (
    <div className="body">
      <div className="intro mt-5">
        <div className="intro_text">
          <h3 className='text-light ms-2' >I am Kartik sharma</h3>
          <h1>Java Full Stack <br/> Developer</h1>
          <h5 className='mt-3'>
            Crafting seamless web experiences from front to back with Java expertise! Passionate about building
            innovative and scalable solutions
          </h5>

          <div className="intro_buttons mt-4">
            <button className='bt'>Download CV <FontAwesomeIcon  icon={faDownload} /></button>
            <FontAwesomeIcon className='icons' icon={faXTwitter} />
            <FontAwesomeIcon className='icons' icon={faLinkedinIn} />
            <FontAwesomeIcon className='icons' icon={faGithub} />
            <FontAwesomeIcon className='icons' icon={faInstagram} />
          </div>
        </div>
      </div>

      <div className="intro_image">

      </div>
    </div>
  )
}
