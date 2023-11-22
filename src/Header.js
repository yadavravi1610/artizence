import React, { useRef, useState, useEffect } from 'react'
import logo from './assets/artizenceLogo.png';
import MenuIcon from '@mui/icons-material/Menu';
import { motion } from 'framer-motion';
import CloseIcon from '@mui/icons-material/Close';



const Header = () => {
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
            <div className='w-auto overflow-x-hidden h-auto mdl:h-72 bg-[url(./assets/headerBackground.png)] flex flex-col justify-between'>
                <div className='flex justify-between pl-6 pr-16 py-5'>
                    <div className='flex gap-2 items-center'>
                        <img className='w-10 bg-white rounded-full' alt='logo' src={logo} />
                        <h1 className='text-white text-lg'>Artizence</h1>
                    </div>
                    <div className='xs:invisible md:visible flex gap-8 items-center text-white'>
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
                <div className='text-white xs:text-[2rem] sml:text-[3rem] font-bold'>
                    <h1 className='tracking-tight py-11 px-16'>BLOGS</h1>
                </div>
            </div>
        </>
    )
}

export default Header