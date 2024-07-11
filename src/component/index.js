import React from 'react'
import profile from '../profile.webp';
function index() {
  return (
        <div className=''>
            <img src={profile} alt='profile' className='w-12 h-12 rounded-full' />
            <h1 className='mt-2 text-xl font-medium text-gray-900 '>Ansub Khan</h1>
            <h1 className='text-gray-500 '>Engineer & Designer</h1>
            <div className='flex flex-row items-center justify-between mt-6 '>
              <div className='flex flex-row gap-x-3'>
                <i class="fa-brands fa-x-twitter mr-2 text-lg"></i>
                <i class="fa-brands fa-github mx-2 text-lg"></i>
                <i class="fa-brands fa-linkedin ml-2 text-lg"></i>
              </div>
            </div>
            <div className='my-8 '>
              <div className='border-b border-gray-200'>
                
              </div>
            </div>
        </div>
  )
}

export default index;