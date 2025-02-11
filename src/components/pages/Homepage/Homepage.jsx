import React from 'react'
import Hero from './hero/Hero'
import About from './about/About'
import Activity from './activity/Activity'
import Moments from './moments/Moments'
import Members from './members/Members'
import Testimonials from './testimonials/Testimonials'
import Join from './joinUs/Join'

const Homepage = () => {
  return (
    <div className='home-container w-full'>
        <Hero />
        <About />
        <Activity/>
        <Moments/>
        <Members/>
        <Testimonials />
        <Join />
    </div>
  )
}

export default Homepage