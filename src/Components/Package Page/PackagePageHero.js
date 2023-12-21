import React from 'react';
import packageimage from '../../assets/packageheader.svg';

const PackagePageHero = () => {
    return (
        <div className='flex flex-col sml:flex-row justify-between mx-10 items-center'>
            <div className='flex flex-col gap-10'>
                <div className='flex flex-col w-5/6 gap-3'>
                    <p className='text-[#D9C7EB] text-4xl font-bold'>Robotic Process Automation</p>
                    <p className='text-[#FFFBFB] text-xl'>Increase your organization efficiency
                        and automate manual task with
                        RPA</p>
                </div>
                <button className='bg-[#FFF9F9] w-32 h-10 rounded-md text-[#713E79]'>Explore</button>
            </div>
            <img className='h-96' alt='' src={packageimage} />
        </div>
    )
}

export default PackagePageHero