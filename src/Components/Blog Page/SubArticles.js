import React from 'react'
import SubArticle from './SubArticle'

const SubArticles = () => {
  return (
    <div className='xs:w-[80%] lg:w-[85%] xs:gap-10 lg:gap-8 flex mdl:flex-row xs:flex-col justify-between mx-auto'>
            <SubArticle />
            <SubArticle />
            <SubArticle />
    </div>
  )
}

export default SubArticles