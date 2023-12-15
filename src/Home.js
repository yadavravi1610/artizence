import React from 'react';
import Article from './Article';
import SubArticles from './SubArticles';
import Contact from './Contact';

const Home = () => {
  return (
    <div className='flex flex-col gap-16 '>
      <Article />
      <SubArticles />
      <Article />
      <SubArticles />
      <SubArticles />
      <Article />
      <Contact />
    </div>
  )
}

export default Home