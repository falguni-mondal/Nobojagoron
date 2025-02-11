import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCards } from 'swiper/modules'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import user from "../../../../assets/image/person.png"

const Testimonials = () => {
    return (
        <section className='testimonials-section px-5 mt-28 overflow-x-hidden pb-5'>
            <h2 className='w-full flex justify-center gap-3 eng font-medium text-[2rem] mb-3 uppercase bengali'><span className='bengali'>-:</span> সামাজিক সমর্থন <span className='bengali'>:-</span></h2>
            <Swiper
                modules={[Autoplay, EffectCards]}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: false,
                }}
                speed={1000}
                effect={'cards'}
                grabCursor={true}
                className='w-[70vw] mx-auto'
            >
                <SwiperSlide className={`testimonial-card leading-5 text-justify p-4 rounded-md bg-[#ffffffb7] backdrop-blur-lg`}>
                    <div className="card-dets flex flex-col items-center h-[300px]">
                        <img className='w-[100px] aspect-square ' src={user} alt="" />
                        <p className='text-[0.9rem] w-full'>
                        Nobojagoron Songho has truly brought our community together! Their dedication to organizing events like Saraswati Puja and Holi is inspiring. Every festival feels more joyful because of their hard work — <i className='text-[0.8rem] font-semibold'>Suman Das</i>
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={`testimonial-card leading-5 text-justify p-4 rounded-md bg-[#ffffffb7] backdrop-blur-lg`}>
                    <div className="card-dets flex flex-col items-center h-[300px]">
                        <img className='w-[100px] aspect-square ' src={user} alt="" />
                        <p className='text-[0.9rem] w-full'>
                        I have been attending their events for years, and the energy, unity, and passion of the team are incredible. They always come up with fresh ideas to make celebrations special for everyone. — <i className='text-[0.8rem] font-semibold'>Priya Mukherjee</i>
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={`testimonial-card leading-5 text-justify p-4 rounded-md bg-[#ffffffb7] backdrop-blur-lg`}>
                    <div className="card-dets flex flex-col items-center h-[300px]">
                        <img className='w-[100px] aspect-square ' src={user} alt="" />
                        <p className='text-[0.9rem] w-full'>
                        Their efforts in making every festival grand and meaningful are commendable. It's not just about celebrations; it's about spreading happiness and strengthening community bonds. — <i className='text-[0.8rem] font-semibold'>Arunava Ghosh</i>
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={`testimonial-card leading-5 text-justify p-4 rounded-md bg-[#ffffffb7] backdrop-blur-lg`}>
                    <div className="card-dets flex flex-col items-center h-[300px]">
                        <img className='w-[100px] aspect-square ' src={user} alt="" />
                        <p className='text-[0.9rem] w-full'>
                        The way Nobojagoron Songho involves everyone in their activities is amazing! Their Saraswati Puja has become the heart of our locality, and I can't wait to see what they do next. — <i className='text-[0.8rem] font-semibold'>Ritu Sen</i>
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={`testimonial-card leading-5 text-justify p-4 rounded-md bg-[#ffffffb7] backdrop-blur-lg`}>
                    <div className="card-dets flex flex-col items-center h-[300px]">
                        <img className='w-[100px] aspect-square ' src={user} alt="" />
                        <p className='text-[0.9rem] w-full'>
                        A big salute to the team for their dedication and teamwork. Their commitment to giving joy to people instead of just receiving is what makes them special — <i className='text-[0.8rem] font-semibold'>Debjyoti Roy</i>
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={`testimonial-card leading-5 text-justify p-4 rounded-md bg-[#ffffffb7] backdrop-blur-lg`}>
                    <div className="card-dets flex flex-col items-center h-[300px]">
                        <img className='w-[100px] aspect-square ' src={user} alt="" />
                        <p className='text-[0.9rem] w-full'>
                        Nobojagoron Songho is not just an organization; it’s a family that brings joy to the entire community. Every event they organize is filled with positivity and togetherness — <i className='text-[0.8rem] font-semibold'>Anirban Biswas</i>
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={`testimonial-card leading-5 text-justify p-4 rounded-md bg-[#ffffffb7] backdrop-blur-lg`}>
                    <div className="card-dets flex flex-col items-center h-[300px]">
                        <img className='w-[100px] aspect-square ' src={user} alt="" />
                        <p className='text-[0.9rem] w-full'>
                        Their passion for making every festival memorable is truly inspiring. The unity among members and their dedication to the community make their events stand out — <i className='text-[0.8rem] font-semibold'>Sweta Dutta</i>
                        </p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}

export default Testimonials