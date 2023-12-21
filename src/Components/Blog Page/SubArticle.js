import React from 'react';
import sub from '../../assets/subArticle.jpg';

const SubArticle = () => {
  return (
    <div className='xs:w-full mdl:w-[33%]'>
        <img className='w-full h-[10rem] rounded-t-lg' src={sub} alt='subarticle' />
        <div className='bg-[#6623A4] flex flex-col justify-between gap-4 items-start px-4 py-3 rounded-b-lg'>
            <button className='bg-[#EEE3FF] text-[#6623A4] font-semibold px-3 rounded-2xl'>CATEGORY</button>
            <h1 className='text-white text-2xl'>Article Name - Headline for an Article</h1>
            <button className='bg-[#FFFBFB] px-5 py-1 rounded-lg text-[#6623A4] font-bold'>Read Now</button>
        </div>
    </div>
  )
}

export default SubArticle