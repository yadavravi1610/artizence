import React from 'react';
import logo from './assets/artizenceLogo.png';
import PhoneIcon from '@mui/icons-material/Phone';
import LanguageIcon from '@mui/icons-material/Language';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import AppleIcon from '@mui/icons-material/Apple';
import play from './assets/google-play.png';
import CopyrightIcon from '@mui/icons-material/Copyright';

const Footer = () => {
    return (
        <>
            <div className='bg-[#6623A4] w-[100%] mt-10'>
                <div className='flex justify-between gap-5 md:gap-0 xs:pl-2 sml:pl-6 xs:pr-0 sml:pr-16 py-10 items-start'>
                    <div className='flex gap-2 items-center'>
                        <img className='w-10 bg-white rounded-full' alt='logo' src={logo} />
                        <h1 className='text-white text-lg font-semibold'>Artizence</h1>
                    </div>
                    <div className='flex gap-5 md:gap-[2rem] text-white'>
                        <div className='text-xl flex flex-col gap-2'>
                            <h1>Home</h1>
                            <h1>About</h1>
                            <h1>Work</h1>
                            <h1>Blog</h1>
                        </div>
                        <div className='text-xl flex flex-col gap-2'>
                            <h1>Services</h1>
                            <h1>Portfolio</h1>
                            <h1>Discover</h1>
                            <h1>Help & Support</h1>
                        </div>
                    </div>
                </div>
                <div className='w-[100%] flex xs:flex-col mdl:flex-row justify-between px-10 py-5 xs:items-start gap-5 mdl:items-center'>
                    <div className='flex flex-col gap-2'>
                        <div className='flex gap-2'>
                            <div className='text-white'><PhoneIcon /></div>
                            <h1 className='text-white xs:text-base mdl:text-xl'>+91-9369489827</h1>
                        </div>
                        <div className='flex gap-3'>
                            <div className='text-white'><LanguageIcon /></div>
                            <h1 className='text-white xs:text-base mdl:text-xl'>artizence.com</h1>
                        </div>
                    </div>
                    <div className='text-white flex gap-6 '>
                        <MailIcon />
                        <LinkedInIcon />
                        <InstagramIcon />
                        <TwitterIcon />
                    </div>
                    <div className='flex gap-4 xs:invisible mdl:visible xs:-mb-20 mdl:mb-0'>
                        <div className='flex items-center gap-2 border border-white px-2 text-white w-36 rounded-lg h-12'>
                            <div>
                                <AppleIcon />
                            </div>
                            <div>
                                <span className='text-xs'>Download on</span>
                                <h1>Apple Store</h1>
                            </div>
                        </div>
                        <div className='flex items-center gap-2 border border-white px-2 text-white w-36 rounded-lg h-12'>
                            <div>
                                <img src={play} className='w-7' alt='' />
                            </div>
                            <div>
                                <span className='text-xs'>Download on</span>
                                <h1>Google Play</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className='w-[90%] mx-auto' />
                <div className='py-8 flex text-white ml-20'>
                    <CopyrightIcon />
                    <h1> Artizence 2023 - All rights reserved</h1>
                </div>
            </div>
        </>
    )
}

export default Footer
