import React from 'react'
import { Link } from 'react-router-dom';
import Index from './index';
import peace from '../peace.svg';
function Contact() {
  return (
    <div className='flex flex-col items-center justify-between w-full min-h-screen p-8 '>
        <div className='w-full max-w-3xl'>
            <Index />
            <div className=''>
                <div className='flex flex-wrap items-center gap-2 mb-8 '>
                    <Link to="/" className='relative px-2 py-1 text-sm text-gray-500 rounded-md hover:text-gray-900'>
                    <span className='relative z-10 '>About</span>
                    </Link>
                    <Link to="/blogs" className='relative px-2 py-1 text-sm text-gray-500 rounded-md hover:text-gray-900'>
                    <span className='relative z-10 '>Blogs</span>
                    </Link>
                    <Link to="/uses" className='relative px-2 py-1 text-sm text-gray-500 rounded-md hover:text-gray-900'>
                    <span className='relative z-10 '>Uses</span>
                    </Link>
                    <Link to="/newsletter" className='relative px-2 py-1 text-sm text-gray-500 rounded-md hover:text-gray-900'>
                    <span className='relative z-10 '>Newsletter</span>
                    </Link>
                    <Link to="/contact" className='relative px-2 py-1 text-sm text-white bg-gray-900 rounded-md'>
                    <span className='relative z-10 '>Contact</span>
                    </Link>
                </div>
            </div>
            <div className='flex '>
                <p className='mb-4 mr-1 text-gray-500'>
                Let's work on something together, you can book a meeting below or drop a dm on 
                </p>
                <span className='text-gray-500 underline'>twitter</span>
            </div>
        </div>
        <div className='flex flex-col items-center justify-center mt-16 text-sm text-center '>
            <div>
                <img src={peace}alt='peace' width="60" height="60" className='bg-transparent '/>
            </div>
            <div>@ 2024 - Ansub Khan</div>
        </div>
    </div>
  )
}

export default Contact;