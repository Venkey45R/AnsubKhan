import React, { useState } from 'react';
import Index from './index';
import { Link } from 'react-router-dom';
import All from './All';
import peace from '../peace.svg';

function Blogs() {
  const [filter, setFilter] = useState('All');

  return (
    <div className='flex flex-col items-center justify-between w-full min-h-screen p-8 '>
      <div className='w-full max-w-3xl'>
        <Index />
        <div className=''>
          <div className='flex flex-wrap items-center gap-2 mb-8 '>
            <Link to="/" className='relative px-2 py-1 text-sm text-gray-500 rounded-md hover:text-gray-900'>
              <span className='relative z-10 '>About</span>
            </Link>
            <Link to="/blogs" className='relative px-2 py-1 text-sm text-white bg-gray-900 rounded-md'>
              <span className='relative z-10 '>Blogs</span>
            </Link>
            <Link to="/uses" className='relative px-2 py-1 text-sm text-gray-500 rounded-md hover:text-gray-900'>
              <span className='relative z-10 '>Uses</span>
            </Link>
            <Link to="/newsletter" className='relative px-2 py-1 text-sm text-gray-500 rounded-md hover:text-gray-900'>
              <span className='relative z-10 '>Newsletter</span>
            </Link>
            <Link to="/contact" className='relative px-2 py-1 text-sm text-gray-500 rounded-md hover:text-gray-900'>
              <span className='relative z-10 '>Contact</span>
            </Link>
          </div>
        </div>
        <div className='flex flex-col items-start w-full gap-3 mb-5 '>
          <div className='w-full '>
            <div className='flex flex-row items-center gap-2 mb-4 text-sm '>
              <button onClick={() => setFilter('All')} className='relative px-2 py-1 text-center text-gray-900 capitalize rounded-lg'>
                <span className='relative z-10 '>All</span>
                {filter === 'All' && (
                  <div className='absolute top-0 left-0 flex items-end justify-center w-full h-full size-full'>
                    <span className='z-0 h-[3px] w-[60%] rounded-t-full bg-gray-900'></span>
                  </div>
                )}
              </button>
              <button onClick={() => setFilter('Passion')} className='relative px-2 py-1 text-center text-gray-900 capitalize rounded-lg'>
                <span className='relative z-10 '>Passion</span>
                {filter === 'Passion' && (
                  <div className='absolute top-0 left-0 flex items-end justify-center w-full h-full size-full'>
                    <span className='z-0 h-[3px] w-[60%] rounded-t-full bg-gray-900'></span>
                  </div>
                )}
              </button>
              <button onClick={() => setFilter('Thoughts')} className='relative px-2 py-1 text-center text-gray-900 capitalize rounded-lg'>
                <span className='relative z-10 '>Thoughts</span>
                {filter === 'Thoughts' && (
                  <div className='absolute top-0 left-0 flex items-end justify-center w-full h-full size-full'>
                    <span className='z-0 h-[3px] w-[60%] rounded-t-full bg-gray-900'></span>
                  </div>
                )}
              </button>
              <button onClick={() => setFilter('Life')} className='relative px-2 py-1 text-center text-gray-900 capitalize rounded-lg'>
                <span className='relative z-10 '>Life</span>
                {filter === 'Life' && (
                  <div className='absolute top-0 left-0 flex items-end justify-center w-full h-full size-full'>
                    <span className='z-0 h-[3px] w-[60%] rounded-t-full bg-gray-900'></span>
                  </div>
                )}
              </button>
            </div>
            <div className=''>
              <All filter={filter} />
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center mt-16 text-sm text-center '>
        <div>
          <img src={peace} alt='peace' width="60" height="60" className='bg-transparent '/>
        </div>
        <div>@ 2024 - Ansub Khan</div>
      </div>
    </div>
  );
}

export default Blogs;
