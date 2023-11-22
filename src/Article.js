import React from 'react';
import article from './assets/article.jpg';

const Article = () => {
  return (
    <div className='bg-[#7A58B2A1] flex xs:flex-col mdl:flex-row justify-between w-[90%] mx-auto rounded-lg p-16'>
        <div className='flex flex-col xs:w-[100%] mdl:w-[60%] justify-between xs:items-center mdl:items-start xs:gap-5 mdl:gap-3 xl:gap-0'>
            <h1 className='font-semibold xs:text-2xl mdl:text-3xl lgl:text-4xl'>The featured article - the most important info about the blog</h1>
            <span className='xs:text-base mdl:text-lg '>Very short description about the article, impressive lines, Very short description about the article, impressive lines</span>
            <button className='w-28 rounded-xl p-2 bg-black text-white mb-3 text-center'>READ NOW</button>
        </div>
        <div className='xs:w-[100%] mdl:w-[35%] h-auto'>
            <img src={article} alt='article' />
        </div>
    </div>
  )
}

export default Article
