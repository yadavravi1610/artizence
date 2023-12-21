import React from 'react'

const ArticlePageHero = () => {
  return (
    <div className='mx-8 mdl:mx-28 mb-10 flex flex-col gap-2'>
         <div className='flex items-center gap-5'>
            <h1 className='text-[#DBC6FFCF] text-lg'>December 21,2023</h1>
            <button className='bg-[#290E4B] text-white px-10 py-1 rounded-xl'>category</button>
         </div>
         <div className='w-4/6 text-white mx-5 mdl:mx-16'>
            <p className='text-lg sm:text-xl sml:text-2xl mdl:text-4xl font-semibold'>AI-Powered OCR (Optical Character Recognition): Enhancing accuracy and efficiency in document analysis
</p>
         </div>
    </div>
  )
}

export default ArticlePageHero
