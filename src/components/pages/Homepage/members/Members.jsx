import React from 'react'
import MemberCarousel from './MemberCarousel'

const Members = () => {
    const members = [
        {
            name: "Papan Roy",
            img: "https://drive.google.com/file/d/1KecnTMRuYYhUt1qS1gK7fIyRn09Qv8S9/view?usp=sharing"
        },
        {
            name: "Sanjib Kapri",
            img: "https://drive.google.com/file/d/1PiOu4pzxcz5lA6KxrkYYtG1sHFiqNhve/view?usp=sharing"
        },
        {
            name: "Swagnik Das",
            img: "https://drive.google.com/file/d/1ucYmkY9_djaoE9VprlK3Ffezhj2ZgXm6/view?usp=sharing"
        },
        {
            name: "Akash Laha",
            img: "https://drive.google.com/file/d/1RIwrQIc2Qh4KCUtIh8HIoEPQglLhQVVv/view?usp=sharing"
        },
        {
            name: "Bivash Mondal",
            img: 'https://ibb.co/GQQtJsdN'
        },
        {
            name: "Prodip Dhali",
            img: "https://drive.google.com/file/d/1SBafc2EjfqU3MWFU28Hcxoo8Xvk7g2uC/view?usp=sharing"
        },
        {
            name: "Subho Halder",
            img: "https://drive.google.com/file/d/1lNFVA1zqae7EN6lmaNfndPKUmLpTr4NC/view?usp=sharing"
        },
        {
            name: "Akash Mondal",
            img: "https://drive.google.com/file/d/15HLeXI1dvd48OIH6EYom07J1vjLyyZBN/view?usp=sharing"
        },
    ]
  return (
    <section className='mt-20' id='members-section'>
        <h2 className='w-full flex justify-center gap-3 eng font-medium text-[2rem] mb-3 uppercase bengali'><span className='bengali'>-:</span> ☘️সদস্যরা☘️ <span className='bengali'>:-</span></h2>
        <MemberCarousel members={members} />
    </section>
  )
}

export default Members