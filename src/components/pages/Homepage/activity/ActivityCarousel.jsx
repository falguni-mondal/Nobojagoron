import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, } from "swiper/modules";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
//icons
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
// IMAGES
import veena from "../../../../assets/image/veena.png";
import holi from "../../../../assets/image/holi.png";
import india from "../../../../assets/image/india.png";
const ActivityCarousel = () => {
    return (
        <>
            <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween="30"
                slidesPerView="1"
                navigation={{
                    nextEl: '.next-btn',
                    prevEl: '.prev-btn',
                }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                speed={1000}
                loop
                grabCursor={true}
            >
                <SwiperSlide className={`activity-card leading-5 text-justify p-4 rounded-md bg-[#ffffffb7] backdrop-blur-lg`}>
                    <div className="card-dets h-[440px]">
                    <img className='w-[120px] mx-auto mb-5' src={veena} alt="" />
                    <h3 className='eng font-semibold mb-3 text-[1.2rem] bengali'>সরস্বতী পূজা - জ্ঞান ও সংস্কৃতির উদযাপন 🎉✨</h3>
                    <p className='text-[1.1rem] bengali leading-7'>
                    ২০২১ সাল থেকে, জ্ঞান, শিক্ষা এবং ঐতিহ্যের এই জমকালো উদযাপনে সম্প্রদায়কে একত্রিত করা হচ্ছে। আমাদের জনগণের ভালোবাসা এবং সমর্থনে, প্রতি বছর আমরা এই উৎসবকে ভক্তি, সাংস্কৃতিক পরিবেশনা এবং আনন্দময় মুহূর্ত দিয়ে পরিপূর্ণ করে আরও বৃহত্তর এবং স্মরণীয় করে তোলার চেষ্টা করি। বিশ্বাস, ঐক্য এবং আনন্দের সাথে জ্ঞানের দেবীর উদযাপনে আমাদের সাথে যোগ দিন। 🙏🎶
                    </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={`activity-card leading-5 text-justify p-4 rounded-md bg-[#ffffffb7] backdrop-blur-lg`}>
                    <div className="card-dets h-[440px]">
                    <img className='w-[110px] mx-auto mb-5' src={holi} alt="" />
                    <h3 className='eng font-semibold mb-3 text-[1.2rem] bengali'>হোলি - রঙ এবং ঐক্যের উৎসব 🌸🎨🎉</h3>
                    <p className='text-[1.1rem] bengali leading-7'>
                    ভগবান রাধাকৃষ্ণের আশীর্বাদে🌼, নবজাগরণ সংঘে হোলি কেবল একটি রঙের উৎসব এর থেকেও বেশি কিছু। এটি আনন্দ, ঐক্য এবং আমাদের সমাজের চেতনার উদযাপন। প্রতি বছর, আমরা আনন্দ ছড়িয়ে দিতে, প্রাণবন্ত রঙের সাথে খেলতে, এবং সঙ্গীত, নৃত্য ও উৎসবমুখর পরিবেশ উপভোগ করতে একত্রিত হই। হাসি এবং ঐক্যের কেন্দ্রবিন্দুতে, আমাদের হোলি উদযাপন আমাদের মধ্যে বন্ধনকে শক্তিশালী করে, প্রতিটি মুহূর্তকে অবিস্মরণীয় করে তোলে। 🌈✨
                    </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={`activity-card leading-5 text-justify p-4 rounded-md bg-[#ffffffb7] backdrop-blur-lg`}>
                    <div className="card-dets h-[440px]">
                    <img className='w-[120px] mx-auto mb-5' src={india} alt="" />
                    <h3 className='eng font-semibold mb-3 text-[1.2rem] bengali'>স্বাধীনতা দিবস - আমাদের স্বাধীনতা ও ঐক্যকে সম্মান জানাই 🇮🇳✨</h3>
                    <p className='text-[1.1rem] bengali leading-7'>
                    নবজাগরণ সংঘে, স্বাধীনতা দিবস কেবল একটি উদযাপন নয় বরং আমাদের বীরদের আত্মত্যাগ এবং আমাদের জাতির ঐক্যের প্রতি শ্রদ্ধাঞ্জলি। প্রতি বছর, আমরা গর্বের সাথে আমাদের জাতীয় পতাকা উত্তোলন করি, জাতীয় সঙ্গীত গাই ও বক্তৃতা, দেশাত্মবোধক গান এবং পরিবেশনা সহ সাংস্কৃতিক অনুষ্ঠানের আয়োজন করি। গভীর শ্রদ্ধা এবং উৎসাহের সাথে, আমরা আমাদের দেশের সমৃদ্ধ ঐতিহ্যকে সম্মান জানাতে এবং তরুণ প্রজন্মকে স্বাধীনতা ও ঐক্যের মূল্যবোধ সমুন্নত রাখতে অনুপ্রাণিত করতে একত্রিত হই। জয় হিন্দ। 🇮🇳🎉
                    </p>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className="navigations px-8 flex justify-center gap-5 mt-3 lg:mt-5 2xl:mt-7">
                <span className="prev-btn w-[50px] h-[50px] flex justify-center items-center bg-amber-300 rounded text-zinc-700"><FaArrowLeftLong /></span>
                <span className="next-btn w-[50px] h-[50px] flex justify-center items-center bg-amber-300 rounded text-zinc-700"><FaArrowRightLong /></span>
            </div>
        </>
    )
}

export default ActivityCarousel