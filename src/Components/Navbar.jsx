import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Navbar.css'

export const Navbar = () => {
  return (
    <>
    <div className="nav">
        <div className="nav1">
            <h2>Logo</h2>
        </div>
        <div className="nav2">
            <div><h5>Home</h5></div>
            <div><h5>Projects</h5></div>
            <div><h5>Skills</h5></div>
            <div><h5>Contact</h5></div>
            <div><h5>Hire Me</h5></div>
        </div>
    </div>
    </>
  )
}
