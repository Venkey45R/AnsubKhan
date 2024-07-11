import React from 'react';
import { Link } from 'react-router-dom';
import Index from './index';
import peace from '../peace.svg';
function Newsletter() {
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
                    <Link to="/newsletter" className='relative px-2 py-1 text-sm text-white bg-gray-900 rounded-md'>
                    <span className='relative z-10 '>Newsletter</span>
                    </Link>
                    <Link to="/contact" className='relative px-2 py-1 text-sm text-gray-500 rounded-md hover:text-gray-900'>
                    <span className='relative z-10 '>Contact</span>
                    </Link>
                </div>
            </div>
            <div>
            <div className='mt-1'>
                <p className='mt-4 text-gray-900 '>Stay ahead of the curve with my monthly newsletter called Luminary. Receive valuable insights on the latest trends, techniques, and tools in web development and design.</p>
                <form className='relative '>
                    <input className='w-full px-2 py-3 mt-4 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent' placeholder='Enter your email' />
                    <button className="absolute inline-block px-2 py-2 text-xs text-white bg-gray-900 rounded-md hover:bg-gray-700 top-6 right-1 disabled:opacity-80" type='submit' disabled>Subscribe</button>
                </form>
            </div>
            <div className='mt-10 mb-4 text-md'>Past Issues:</div>
            <div className='flex flex-col w-full gap-3 '>
                <div className='flex flex-col py-3 pl-3 space-y-1 border border-gray-200 rounded-lg bg-gray-50 hover:bg-white' tabIndex='0'>
                    <div className='flex flex-col w-full '>
                        <div className='flex flex-col gap-2 '>
                            <p className='text-xs text-gray-500 '>2024-06-30</p>
                            <p className="mt-2 text-xl tracking-tight text-gray-900 font-heading">Luminary #6</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col py-3 pl-3 space-y-1 border border-gray-200 rounded-lg bg-gray-50 hover:bg-white' tabIndex='0'>
                    <div className='flex flex-col w-full '>
                        <div className='flex flex-col gap-2 '>
                            <p className='text-xs text-gray-500 '>2024-05-30</p>
                            <p className="mt-2 text-xl tracking-tight text-gray-900 font-heading">Luminary #5</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col py-3 pl-3 space-y-1 border border-gray-200 rounded-lg bg-gray-50 hover:bg-white' tabIndex='0'>
                    <div className='flex flex-col w-full '>
                        <div className='flex flex-col gap-2 '>
                            <p className='text-xs text-gray-500 '>2024-04-31</p>
                            <p className="mt-2 text-xl tracking-tight text-gray-900 font-heading">Luminary #4</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col py-3 pl-3 space-y-1 border border-gray-200 rounded-lg bg-gray-50 hover:bg-white' tabIndex='0'>
                    <div className='flex flex-col w-full '>
                        <div className='flex flex-col gap-2 '>
                            <p className='text-xs text-gray-500 '>2024-03-31</p>
                            <p className="mt-2 text-xl tracking-tight text-gray-900 font-heading">Luminary #3</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col py-3 pl-3 space-y-1 border border-gray-200 rounded-lg bg-gray-50 hover:bg-white' tabIndex='0'>
                    <div className='flex flex-col w-full '>
                        <div className='flex flex-col gap-2 '>
                            <p className='text-xs text-gray-500 '>2024-02-29</p>
                            <p className="mt-2 text-xl tracking-tight text-gray-900 font-heading">Luminary #2</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col py-3 pl-3 space-y-1 border border-gray-200 rounded-lg bg-gray-50 hover:bg-white' tabIndex='0'>
                    <div className='flex flex-col w-full '>
                        <div className='flex flex-col gap-2 '>
                            <p className='text-xs text-gray-500 '>2024-01-30</p>
                            <p className="mt-2 text-xl tracking-tight text-gray-900 font-heading">Luminary #1</p>
                        </div>
                    </div>
                </div>
            </div>
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

export default Newsletter;