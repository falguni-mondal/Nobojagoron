import React from 'react'
import Routing from './utils/Routing'
import Nav from './nav/Nav'
import Footer from './footer/Footer'

const App = () => {
  return (
    <div className="wrapper w-full min-h-screen bg-[#fffbea]">
      <div className="content">
      <Routing />
      <Footer />
      </div>
      <Nav/>
    </div>
  )
}

export default App