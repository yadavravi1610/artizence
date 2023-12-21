import React, { useEffect, useState } from 'react';
import circleImg from '../../assets/circle_purple.png.svg';
import Header from '../../Header';

const Package = () => {
    const [packageContent, setPackageContent] = useState(false);
     useEffect(()=>{
        const currentUrl = window.location.href;
    if(currentUrl === "http://localhost:3000/Package")
    {
       setPackageContent(true);
    }
     },[])
    //  console.log(packageContent);
    return (
        <div className='flex flex-col gap-10'>
            <Header packageContent={packageContent}/>
            <div className='flex flex-col lg:flex-row gap-10 lg:gap-0'>
                <div className=' lg:w-1/3 px-10 xl:px-28 flex flex-col gap-5'>
                    <div>
                        <h1>What is</h1>
                        <p className='text-[#6623A4] text-3xl font-bold'>Robotic Process Automation(RPA)?</p>
                        <p className='font-light mt-3'>Robotic Process Automation (RPA) is a technology that uses software robots or "bots" to automate repetitive, rule-based tasks in business processes, increasing efficiency and reducing human intervention.</p>
                    </div>
                    <button className='bg-[#6623A4] text-white mx-auto lg:mx-16 font-semibold text-xl w-52 py-5 px-5 text-left rounded-2xl'>
                        Artizence Specialize in RPA Development
                    </button>
                </div>
                <div className='lg:w-2/3'>
                    <h1 className='text-center text-[#6623A4] font-bold text-xl'>Advantages of RPA</h1>
                    <div className='flex gap-5 mx-auto mdl:w-[55%] lgl:w-[65%] xl:w-[50%] mt-2 flex-wrap justify-center'>
                        <div className='drop-shadow-xl bg-gray-200 rounded-2xl w-48 px-5 py-5 flex flex-col gap-2'>
                            <img src={circleImg} alt='' className='w-12' />
                            <h1 className='text-lg font-light'>INCREASED EFFICIENCY</h1>
                        </div>
                        <div className='w-48 px-5 py-5 bg-gray-200 rounded-2xl flex flex-col gap-2'>
                            <img src={circleImg} alt='' className='w-12' />
                            <h1 className='text-lg font-light'>INCREASED EFFICIENCY</h1>
                        </div>
                        <div className='w-48 px-5 py-5 bg-gray-200 rounded-2xl flex flex-col gap-2'>
                            <img src={circleImg} alt='' className='w-12' />
                            <h1 className='text-lg font-light'>INCREASED EFFICIENCY</h1>
                        </div>
                        <div className='w-48 px-5 py-5 bg-gray-200 rounded-2xl flex flex-col gap-2'>
                            <img src={circleImg} alt='' className='w-12' />
                            <h1 className='text-lg font-light'>INCREASED EFFICIENCY</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full h-96 bg-[#A09CA5] flex justify-center items-center text-xl text-white'>
                <h1>VIDEO - ANIMATION</h1>
            </div>
            <div className='w-full flex flex-col items-center gap-6'>
                <div className='bg-[#D9D9D9] w-5/6 h-auto sm:h-96 rounded-2xl flex flex-col sm:flex-row justify-center items-center gap-5 sm:gap-0 py-5 sm:py-0'>
                     <div className='w-full sm:w-40 md:w-60 lgl:w-72 xl:w-80 sm:border-r-2 border-black h-80 flex flex-col items-center justify-between'>
                        <h1 className='text-2xl font-bold'>Basic</h1>
                        <div className='flex flex-col items-center gap-3'>
                            <h1>$459+</h1>
                            <button className='bg-[#FFF9F9] text-[#713E79] py-2 px-3 sm:px-2 sml:px-3 rounded-lg font-bold'>Let's Discuss</button>
                        </div>
                     </div>
                     <div className='w-full sm:w-40 md:w-60 lgl:w-72 xl:w-80 sm:border-r-2 border-black h-80 flex flex-col items-center justify-between'>
                        <h1 className='text-2xl font-bold'>Standard</h1>
                        <div className='flex flex-col items-center gap-3'>
                            <h1>$459+</h1>
                            <button className='bg-[#FFF9F9] text-[#713E79] py-2 px-3 sm:px-2 sml:px-3 rounded-lg font-bold'>Let's Discuss</button>
                        </div>
                     </div>
                     <div className='w-full sm:w-40 md:w-60 lgl:w-72 xl:w-80 h-80 flex flex-col items-center justify-between'>
                        <h1 className='text-2xl font-bold'>Advance</h1>
                        <div className='flex flex-col items-center gap-3'>
                            <h1>$459+</h1>
                            <button className='bg-[#FFF9F9] text-[#713E79] py-2 px-3 rounded-lg font-bold'>Let's Discuss</button>
                        </div>
                     </div>
                </div>
                <button className='bg-[#713E79E5] w-32 h-10 rounded-md text-white'>Explore</button>
            </div>
        </div>
    )
}

export default Package