import React, { useState, useEffect } from 'react';
import Contact from '../../Contact';
import vector from '../../assets/Vector.svg';
import articleImage from '../../assets/tom-morel-ktVazL5c7FM-unsplash 3.svg';
import Header from '../../Header';

const ArticlePage = () => {
  const [articlePage, setArticlePage] = useState(false);

  useEffect(() => {
    const currentUrl = window.location.href;
    if(currentUrl === "http://localhost:3000/ArticlePage")
    {
       setArticlePage(true);
    }
  }, []);

  return (
    <>
      <Header articlePage={articlePage} />
      <div className='flex flex-col md:flex-row mx-2 md:mx-10 '>
        <div className='flex flex-row md:flex-col gap-3 min-w-[12%] my-10 flex-wrap'>
          <div className='px-1 md:px-5 py-2 border-l-2 border-[#D4BEF6AB] ml-1 md:ml-5 font-light'>
            <p>sub-title</p>
          </div>
          <div className='px-1 md:px-5 py-2 border-l-2 border-[#D4BEF6AB] ml-1 md:ml-5 font-light'>
            <p>sub-title</p>
          </div>
          <div className='px-1 md:px-5 py-2 border-l-2 border-[#D4BEF6AB] ml-1 md:ml-5 font-light'>
            <p>sub-title</p>
          </div>
          <div className='px-1 md:px-5 py-2 border-l-2 border-[#D4BEF6AB] ml-1 md:ml-5 font-light'>
            <p>sub-title</p>
          </div>
          <div className='px-1 md:px-5 py-2 border-l-2 border-[#D4BEF6AB] ml-1 md:ml-5 font-light'>
            <p>sub-title</p>
          </div>
          <div className='bg-[#290E4B] py-2 px-4 rounded-xl text-lg w-40'>
            <button className='text-white font-bold'>Schedule a call</button>
          </div>
        </div>
        <div className='px-5 md:px-20'>
          <div className='my-10 flex flex-col'>
            <div className='w-full flex justify-between font-light text-lg'>
              <p>Author</p>
              <p>Reading Time</p>
            </div>
            <div className='flex justify-between'>
              <div className='flex gap-4'>
                <div className='w-12 h-12 rounded-full bg-[#D9D9D9]'></div>
                <div className='flex flex-col'>
                  <h1 className='font-bold'>John Doe</h1>
                  <p className='text-sm md:text-base'>CSO & co-founder</p>
                </div>
              </div>
              <div className='flex gap-3 font-bold items-center'>
                <img src={vector} alt='' className='w-4' />
                <p>9 mins</p>
              </div>
            </div>
            <p className='text-lg md:text-2xl mt-2'>TEXT India, a diverse and culturally rich nation in indian subcontinent, is renowned for its ancient history, vibrant traditions, and spiritual heritage. From the majestic Himalayas to the vast Thar Desert, India's landscapes are as varied as its languages, religions, and cuisines. With a tapestry of bustling cities, sacred temples, and historical monuments, India captures the essence of both tradition and modernity, attracting visitors with its kaleidoscope of experiences and deep-rooted cultural tapestry.</p>
          </div>
          <div className='my-10 flex flex-col gap-5'>
            <h1 className='text-2xl font-semibold'>HEADING 2</h1>
            <img src={articleImage} alt='' className='w-full' />
            <p className='text-lg'>TEXT India, a diverse and culturally rich nation in indian subcontinent, is renowned for its ancient history, vibrant traditions, and spiritual heritage. From the majestic Himalayas to the vast Thar Desert, India's landscapes are as varied as its languages, religions, and cuisines. With a tapestry of bustling cities, sacred temples, and historical monuments, India captures the essence of both tradition and modernity, attracting visitors with its kaleidoscope of experiences and deep-rooted cultural tapestry.</p>
          </div>
          <div className='my-10 flex flex-col gap-5'>
            <h1 className='text-lg font-semibold'>HEADING 2</h1>
            <p className='text-lg'>TEXT India, a diverse and culturally rich nation in indian subcontinent, is renowned for its ancient history, vibrant traditions, and spiritual heritage. From the majestic Himalayas to the vast Thar Desert, India's landscapes are as varied as its languages, religions, and cuisines. With a tapestry of bustling cities, sacred temples, and historical monuments, India captures the essence of both tradition and modernity, attracting visitors with its kaleidoscope of experiences and deep-rooted cultural tapestry.</p>
          </div>
          <div className='my-10 flex flex-col gap-5'>
            <h1 className='text-lg font-semibold'>HEADING 3</h1>
            <ul className='list-disc ml-10 flex flex-col gap-5 text-lg'>
              <li>LIST ITEM 1:  kaleidoscope of experiences and deep-rooted cultural tapestry</li>
              <li>LIST ITEM 2:  kaleidoscope of experiences and deep-rooted cultural tapestry</li>
              <li>LIST ITEM 3:  kaleidoscope of experiences and deep-rooted cultural tapestry</li>
              <li>LIST ITEM 4:  kaleidoscope of experiences and deep-rooted cultural tapestry</li>
            </ul>
          </div>
          <div className='my-10 flex flex-col gap-5'>
            <h1 className='text-lg font-semibold'>HEADING 2</h1>
            <p className='text-lg'>TEXT India, a diverse and culturally rich nation in indian subcontinent, is renowned for its ancient history, vibrant traditions, and spiritual heritage. From the majestic Himalayas to the vast Thar Desert, India's landscapes are as varied as its languages, religions, and cuisines. With a tapestry of bustling cities, sacred temples, and historical monuments, India captures the essence of both tradition and modernity, attracting visitors with its kaleidoscope of experiences and deep-rooted cultural tapestry.</p>
          </div>
          <div className='my-10 flex gap-10 font-semibold items-center border-t-2 border-[#D9D9D9] border-b-2 py-3'>
            <button className='w-40 bg-[#290E4B] text-lg rounded-xl py-1 font-semibold text-white'>category</button>
            <p>:</p><p>NLP</p><p>NLP</p>
          </div>
        </div>
      </div>
      <Contact />
    </>


  )
}

export default ArticlePage