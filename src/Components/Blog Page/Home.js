import React ,{useEffect, useState}from 'react';
import Article from './Article';
import SubArticles from './SubArticles';
import Contact from '../../Contact';
import Header from '../../Header';

const Home = () => {
  const [blog, setBlog] = useState(false);
  useEffect(() => {
    const currentPath = window.location.pathname;
    if(currentPath === "/" || currentPath.startsWith("/"))
    {
       setBlog(true);
    }
  }, []);
// console.log(blog);

  return (
    
    <div className='flex flex-col gap-16 '>
      <Header blog={blog} />
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