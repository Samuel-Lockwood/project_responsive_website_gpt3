import React from 'react'
import "./App.css"
import { Navbar, Brands } from "./components"
import { Header, WhatGPT3, Features, Possibility, Register, Blog, Footer } from "./containers"
const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brands />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Register />
      <Blog />
      <Footer />
    </div>
  )
}

export default App