import React from 'react'
import { Link } from 'react-router-dom'

const Join = () => {
  return (
    <section className="bg-gradient-to-b from-yellow-400 to-orange-400 py-16 px-6 text-center mt-28">
      <h2 className="text-5xl font-bold text-white mb-4 bengali leading-14">আরও বড় কিছুর অংশ হতে আমাদের সাথে যোগ দিন!</h2>
      <p className="text-xl text-white mb-6 max-w-2xl mx-auto bengali">
      নবজাগরণ সংঘের অংশ হোন এবং আসুন একসাথে কিছু পরিবর্তন আনি! আপনি স্বেচ্ছাসেবক হতে চান, সদস্য হতে চান, অথবা আমাদের ইভেন্টগুলিকে সমর্থন করতে চান, এখানে আপনার জন্য একটি জায়গা আছে।
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link to="/signup" className="border-[2px] border-black bg-black text-white text-xl px-6 py-3 rounded-full font-medium bengali">
        সদস্য হন
        </Link>
        <button className="border-[2px] border-white text-white text-xl px-6 py-3 rounded-full font-semibold bengali">
        সহকারী হন
        </button>
      </div>
    </section>
  )
}

export default Join