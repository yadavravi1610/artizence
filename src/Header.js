import React, { useRef, useState, useEffect } from 'react'
import logo from './assets/artizenceLogo.png';
import MenuIcon from '@mui/icons-material/Menu';
import { motion } from 'framer-motion';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import BlogHero from './BlogHero';
import ArticlePageHero from './Components/Article Page/ArticlePageHero';
import PackagePageHero from './Components/Package Page/PackagePageHero';



const Header = (blog, articlePage, packageContent) => {

    const {blogContent} = blog;
    const {article} = articlePage;
    const {packpageContent} = packageContent;

    console.log("Blog", blogContent);
    console.log("article", article);
    console.log("Package", packpageContent);
    const [sideMenu, setSideMenu] = useState(false);
    const ref = useRef();

    useEffect(() => {
        document.body.addEventListener("click", (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                setSideMenu(false);
            }
        })
    }, [ref, sideMenu])
    return (
        <>
            <div className='w-auto overflow-x-hidden mb-10 h-auto  bg-[url(./assets/headerBackground.png)] bg-cover flex flex-col justify-between '>
                <div className='flex justify-between pl-6 pr-16 py-5'>
                    <div className='flex gap-2 items-center'>
                        <img className='w-10 bg-white rounded-full' alt='logo' src={logo} />
                        <h1 className='text-white text-lg'>Artizence</h1>
                    </div>
                    <div className='xs:invisible md:visible flex gap-8 items-center text-white'>
                        <div>
                            <Link to='/ArticlePage'>
                                <h1 className='text-lg'>Services</h1>
                            </Link>
                        </div>
                        <div>
                            <h1 className='text-lg'>Blogs</h1>
                        </div>
                        <div>
                            <Link to='/Package'>
                                <h1 className='font-bold underline text-lg'>Contact Us</h1>
                            </Link>
                        </div>
                        <button className='bg-white text-[#5D0A96] px-2 py-1 rounded-lg'>
                            Reach out to us
                        </button>
                    </div>
                    <div ref={ref} className='xs:visible md:invisible text-white font-bold absolute right-14 top-12' onClick={() => (setSideMenu(true))}>
                        <MenuIcon />
                    </div>
                    {
                        sideMenu &&
                        <div className='w-[50%] h-screen fixed top-0 left-0 bg-slate-950 bg-opacity-80 z-50  text-white'>
                            <motion.div initial={{ x: -500, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: .5 }} className='flex flex-col gap-10 absolute top-10 left-5'>
                                <div>
                                    <h1 className='text-lg'>Services</h1>
                                </div>
                                <div>
                                    <h1 className='text-lg'>Blogs</h1>
                                </div>
                                <div>
                                    <h1 className='font-bold underline text-lg'>Contact Us</h1>
                                </div>
                                <button className='bg-white text-[#5D0A96] px-2 py-1 rounded-lg'>
                                    Reach out to us
                                </button>
                            </motion.div>
                            <div onClick={() => setSideMenu(false)} className='w-10 absolute cursor-pointer h-10 ml-[70%] text-white flex items-center justify-center duration-300'><CloseIcon />
                            </div>
                        </div>
                    }
                </div>
                {
                    blogContent && <BlogHero />
                }
                {
                    article && <ArticlePageHero />
                }
                {
                    packpageContent && <PackagePageHero />
                }
                
            </div>
        </>
    )
}

export default Header