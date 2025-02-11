import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

// IMAGES
import papan from '../../../../assets/gallery/members/papan.jpg';
import sanjib from '../../../../assets/gallery/members/sanjib.jpg';
import guddu from '../../../../assets/gallery/members/guddu.jpg';
import akash from '../../../../assets/gallery/members/akash.jpg';
import bivash from '../../../../assets/gallery/members/bivash.jpg';
import prodip from '../../../../assets/gallery/members/prodip.jpg';
import subho from '../../../../assets/gallery/members/subho.jpg';
import akash_m from '../../../../assets/gallery/members/akash.m.jpg';

const MemberCarousel = () => {
    const swiperRef = useRef(null);

    useEffect(() => {
        if (swiperRef.current && swiperRef.current.swiper) {
            // Access Swiper instance and set smooth linear transition
            swiperRef.current.swiper.wrapperEl.style.transitionTimingFunction = "linear";
        }
    }, []);
    return (
        <div className="swiper-container w-full relative">
            <span className="swiper-overlay block absolute w-full h-full top-0 left-0 z-10"></span>
            <Swiper
                ref={swiperRef}
                modules={[Autoplay]}
                spaceBetween={30}
                slidesPerView={3}
                loop={true}
                speed={4000}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: false,
                }}
                allowTouchMove={false}
                className="continuous-slider"
            >
                <SwiperSlide>
                    <div className="slide-dets flex flex-col items-center relative">
                        <span className="block absolute member-img-overlay rounded-full aspect-square top-0 left-0 w-full"></span>
                        <img
                            className="member-img aspect-square rounded-full object-cover"
                            src={papan}
                            alt="papan.img"
                        />
                        <p className="capitalize flex justify-center mt-2 text-center text-[0.9rem] font-medium">
                            Papan Roy
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-dets flex flex-col items-center relative">
                        <span className="block absolute member-img-overlay rounded-full aspect-square top-0 left-0 w-full"></span>
                        <img
                            className="member-img aspect-square rounded-full object-cover"
                            src={sanjib}
                            alt="sanjib.img"
                        />
                        <p className="capitalize flex justify-center mt-2 text-center text-[0.9rem] font-medium">
                            Sanjib Kapri
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-dets flex flex-col items-center relative">
                        <span className="block absolute member-img-overlay rounded-full aspect-square top-0 left-0 w-full"></span>
                        <img
                            className="member-img aspect-square rounded-full object-cover"
                            src={guddu}
                            alt="guddu.img"
                        />
                        <p className="capitalize flex justify-center mt-2 text-center text-[0.9rem] font-medium">
                            Swagnik Das
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-dets flex flex-col items-center relative">
                        <span className="block absolute member-img-overlay rounded-full aspect-square top-0 left-0 w-full"></span>
                        <img
                            className="member-img aspect-square rounded-full object-cover"
                            src={akash}
                            alt="akash.img"
                        />
                        <p className="capitalize flex justify-center mt-2 text-center text-[0.9rem] font-medium">
                            Akash Laha
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-dets flex flex-col items-center relative">
                        <span className="block absolute member-img-overlay rounded-full aspect-square top-0 left-0 w-full"></span>
                        <img
                            className="member-img aspect-square rounded-full object-cover"
                            src={bivash}
                            alt="bivash.img"
                        />
                        <p className="capitalize flex justify-center mt-2 text-center text-[0.9rem] font-medium">
                            Bivash Mondal
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-dets flex flex-col items-center relative">
                        <span className="block absolute member-img-overlay rounded-full aspect-square top-0 left-0 w-full"></span>
                        <img
                            className="member-img aspect-square rounded-full object-cover"
                            src={prodip}
                            alt="prodip.img"
                        />
                        <p className="capitalize flex justify-center mt-2 text-center text-[0.9rem] font-medium">
                            Prodip Dhali
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-dets flex flex-col items-center relative">
                        <span className="block absolute member-img-overlay rounded-full aspect-square top-0 left-0 w-full"></span>
                        <img
                            className="member-img aspect-square rounded-full object-cover"
                            src={subho}
                            alt="subho.img"
                        />
                        <p className="capitalize flex justify-center mt-2 text-center text-[0.9rem] font-medium">
                            Subho Halder
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-dets flex flex-col items-center relative">
                        <span className="block absolute member-img-overlay rounded-full aspect-square top-0 left-0 w-full"></span>
                        <img
                            className="member-img aspect-square rounded-full object-cover"
                            src={akash_m}
                            alt="akash mondal.img"
                        />
                        <p className="capitalize flex justify-center mt-2 text-center text-[0.9rem] font-medium">
                            Akash Mondal
                        </p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default MemberCarousel;
