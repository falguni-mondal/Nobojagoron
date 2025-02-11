import React from 'react';
import saraswati from '../../../../assets/image/saraswati.png';
import alpana from '../../../../assets/image/alpana.png';
import ghot from '../../../../assets/image/ghot.png';
import puja from '../../../../assets/image/puja.png';
import { MdKeyboardArrowDown } from "react-icons/md";

const Hero = () => {
  return (
    <section className='min-h-screen w-full relative overflow-x-hidden' id="hero-section">
      <img className='scale-[0.8] relative top-[13vh] z-[9]' id='maa-saraswati' src={saraswati} alt="maa saraswati img" />
      <img className='absolute z-[8] top-[23vh] left-[50%] -translate-y-[50%] -translate-x-[50%]' src={alpana} alt="alpana img" id="alpana" />
      <div className='w-full px-3 flex justify-between absolute top-[70vh]' id="ghot">
        <img className='w-[120px]' src={ghot} alt="ghot img" />
        <img className='w-[120px]' src={ghot} alt="ghot img" />
      </div>
      <div className="puja-container flex w-full justify-center absolute top-[65vh] z-[10]">
        <img className='w-[150px]' src={puja} alt="" id="puja" />
      </div>
      {/* <div className="scroll-msg w-full flex flex-col items-center relative top-[27vh] text-white">
        <span className='tracking-[1px]'>Scroll</span>
        <MdKeyboardArrowDown className='text-[1.3rem]'/>
      </div> */}
    </section>
  )
}

export default Hero