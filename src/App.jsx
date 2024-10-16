import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <>
      <div>
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Portfolio></Portfolio>
      <Skills></Skills>
      <Contact></Contact>
      <Footer></Footer>
      </div>
      <Toaster />
    </>
  )
}

export default App;
