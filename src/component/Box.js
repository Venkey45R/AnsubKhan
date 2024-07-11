import React from 'react'

function Box(props) {
    const head = props.head;
    const data = props.data;
  return (
    <div className='w-full '>
        <div className='flex flex-col w-full gap-3 '>
            <div className='flex flex-col w-full py-3 pl-3 space-y-1 bg-gray-100 border border-gray-200 rounded-lg hover:bg-white' tabIndex="0">
                <div className='flex flex-col w-full '>
                    <div className='flex items-center gap-2 '>
                        <p className='text-lg tracking-tight text-gray-900 font-heading'>{head}</p>
                    </div>
                    <p className='mt-1 text-sm tracking-tight text-gray-500'>{data}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Box;