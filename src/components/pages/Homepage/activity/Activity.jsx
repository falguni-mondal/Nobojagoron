import React from 'react'
import ActivityCarousel from './ActivityCarousel'

const Activity = () => {
  return (
    <section className='mt-20 px-3' id='activity-section'>
      <div className="heading">
        <h2 className='w-full font-medium flex justify-center text-[2rem] uppercase bengali'><span className='bengali mr-2 uppercase'>-:</span>আমাদের কার্যক্রম<span className='bengali ml-2'>:-</span></h2>
      </div>
      <div className="activities mt-3">
        <ActivityCarousel />
      </div>
    </section>
  )
}

export default Activity