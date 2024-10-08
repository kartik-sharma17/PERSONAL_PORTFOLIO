import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Front } from './Components/Front'
import { Navbar } from './Components/Navbar'
import { Education } from './Components/Education'
import { Skills } from './Components/Skills'
import { Footer } from './Components/Footer'
import { Projects } from './Components/Projects'
import { Experiance } from './Components/Experiance'
import { Contact } from './Components/Contact'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Front />
        <Education />
        <Skills />
        <Experiance />
        <Projects />
        <Contact />
        <Footer /> 
      </BrowserRouter>
    </>
  )
}

export default App
