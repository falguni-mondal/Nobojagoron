import React from 'react'
import m0 from "../../../../assets/gallery/moment0.jpg";
import m1 from "../../../../assets/gallery/moment1.jpg";
import m2 from "../../../../assets/gallery/moment2.jpg";
import m3 from "../../../../assets/gallery/moment3.jpg";
import m4 from "../../../../assets/gallery/moment4.jpg";
import { Link } from 'react-router-dom';
const Moments = () => {
  return (
    <section className='mt-20 px-5' id='moments-section'>
        <h2 className='w-full flex justify-center gap-3 eng font-medium text-[2rem] mb-5 uppercase bengali'><span className='bengali'>-:</span> কিছু মুহূর্ত <span className='bengali'>:-</span></h2>
        <div className="gallery grid grid-cols-8 gap-2">
            <img className='rounded object-cover h-[150px] w-full col-span-5' src={m0} alt="" />
            <img className='rounded object-cover h-[150px] w-full col-span-3' src={m4} alt="" />
            <img className='rounded object-cover h-[200px] col-span-8 w-full' src={m2} alt="" />
            <img className='rounded object-cover h-[150px] col-span-4' src={m3} alt="" />
            <img className='rounded object-cover h-[150px] col-span-4' src={m1} alt="" />
        </div>
        <div className="buttons mt-3">
            <Link to="/gallery" className='eng font-medium px-4 py-3 bg-amber-400 flex justify-center items-center rounded text-[0.95rem]'>Explore Gallery</Link>
        </div>
    </section>
  )
}

export default Moments