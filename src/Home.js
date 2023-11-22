import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Article from './Article';
import SubArticles from './SubArticles';
import Contact from './Contact';

const Home = () => {
  return (
    <div className='flex flex-col gap-16'>
      <Header />
      <Article />
      <SubArticles />
      <Article />
      <SubArticles />
      <SubArticles />
      <Article />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home