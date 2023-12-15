import React from 'react';

const Contact = () => {
  return (
    <div className='flex flex-col lg:flex-row w-[85%] mdl:w-[70%] mdl:py-20 xl:px-28 gap-5 p-5 justify-between mx-auto rounded-lg bg-[#64429F]'>
        <div className='text-white max-w-[25rem] flex flex-wrap mx-auto'>
            <h1 className='text-2xl sml:text-3xl mdl:text-4xl xl:text-5xl font-semibold'>Let us know what story you want us to cover</h1>
        </div>
        <form className='mx-auto flex flex-col gap-5'>
            <div className='flex gap-5'>
                <input type='text' className='w-24 md:w-32 mdl:w-52 mdl:h-12 rounded-xl pl-2 py-1' placeholder='Phone no.' />
                <input type='email' className='w-32 mdl:w-52 mdl:h-12 rounded-xl pl-2 py-1' placeholder='Email' />
            </div>
            <input type='text' className='rounded-xl pl-2 py-1 h-12' placeholder='Company' />
            <textarea placeholder='Subject' className='rounded-xl pl-2 py-1 mdl:h-12'></textarea>
            <input type='submit' className='rounded-xl pl-2 py-1 mdl:h-12 bg-[#300856] uppercase text-white' />
        </form>
    </div>
  )
}

export default Contact