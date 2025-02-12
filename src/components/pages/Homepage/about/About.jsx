import React from 'react';
import nomo from '../../../../assets/image/nomo.png';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <section className='w-full px-5' id="about-section">
            <div className="about-heading flex justify-between items-center px-[12%] mb-3">
                <img className='w-[40px] object-cover' src={nomo} alt="Nomo img." />
                <h1 className='bengali text-[2rem]'>-: নমস্কার :-</h1>
                <img className='w-[40px] object-cover' src={nomo} alt="Nomo img." />
            </div>
            <p className='about-body bengali w-full text-justify text-[1.1rem]'>
                নবজাগরণ সংঘ দুর্গাপুরের রঘুনাথপুরে অবস্থিত একটি প্রাণবন্ত সম্প্রদায় সংগঠন, যা ঐক্য, সাংস্কৃতিক উদযাপন এবং সামাজিক সম্প্রীতি বৃদ্ধিতে নিবেদিতপ্রাণ। ২০২১ সাল থেকে আমরা সরস্বতী পূজা আয়োজন করে আসছি, যা একটি ছোট উদ্যোগ হিসেবে শুরু হয়েছিল কিন্তু বছরের পর বছর দ্রুত ভাবে একটি বড় উৎসবে পরিণত হয়, যেটি আমাদের স্থানীয় সমাজ থেকে প্রচুর জনপ্রিয়তা এবং সমর্থন অর্জন করে।
            </p>
            <div className="buttons mt-3 flex gap-2">
                <Link to="/about" className='eng font-medium w-[120px] py-2 border-[1.5px] border-amber-400 flex justify-center items-center rounded text-[0.95rem]'>আরও দেখুন</Link>
                <Link to="/signup" className='eng font-medium w-[120px] py-2 bg-amber-400 flex justify-center items-center rounded text-[0.95rem]'>সদস্য হন</Link>
            </div>
        </section>
    )
}

export default About