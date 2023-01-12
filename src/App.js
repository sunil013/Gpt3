import React from 'react'
import { Blog,Features,Footer,Possibility,Header,WhatGpt3 } from './containers'
import { Cta,Navbar,Brand } from './components'
import './App.css'

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar/>
        <Header/>
      </div>
        <Brand/>
        <WhatGpt3/>
        <Features/>
        <Possibility/>
        <Cta/>
        <Blog/>
        <Footer/>
    </div>
  )
}

export default App