import React from 'react';
import Index from './index';
import { Link } from 'react-router-dom';
import Syntax from '../syntaxUI.svg';
import pretty from '../prettyfolio.webp';
import enchant from '../enchant.webp';
import portfolio from '../portfolio.webp';
import quote from '../quote-vault.webp';
import peace from '../peace.svg';
function About() {
  return (
    <div className='flex flex-col items-center justify-between w-full min-h-screen p-8 '>
        <div className='w-full max-w-3xl'>
            <Index />
            <div className=''>
                <div className='flex flex-wrap items-center gap-2 mb-8 '>
                    <Link to="/" className='relative px-2 py-1 text-sm text-white bg-gray-900 rounded-md'>
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
                    <Link to="/contact" className='relative px-2 py-1 text-sm text-gray-500 rounded-md hover:text-gray-900'>
                    <span className='relative z-10 '>Contact</span>
                    </Link>
                </div>
            </div>
            <div className=''>
                <p className='text-gray-500 '>Founding Software Engineer & Designer at Speedy (YC-W23). Passionate about crafting tools that empower developers and designers to express themselves seamlessly.</p>
            </div>
            <div className='mt-16 '>
                <h1 className='mb-4 text-lg font-medium text-gray-900 '>Experience</h1>
                <ol className='relative border-gray-200 border-s'>
                    <li className='mb-10 ms-4'>
                        <div className='absolute w-3 h-3 bg-gray-500 rounded-full mt-1.5 -start-1.5 border'></div>
                        <div className='flex flex-row items-center gap-2 '>
                            <div className='font-medium text-gray-900 text-md'>Founding Software Enginner</div>
                            <div className='inline-block px-1 py-0 text-xs text-gray-500 uppercase border border-gray-500 rounded-full'>present</div>
                        </div>
                        <div className='mb-4 text-sm font-normal text-gray-500 '>Speedybrand (YC-W23)</div>
                    </li>
                    <li className='mb-10 ms-4'>
                        <div className='absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border '></div>
                        <div className='font-medium text-gray-900 text-md'>Front-End Engineer</div>
                        <div className="mb-4 text-sm font-normal text-gray-500">Maya Labs (YC-S22)</div>
                    </li>
                </ol>
            </div>
            <div className='mt-16 '>
                <h1 className='mb-4 text-lg font-medium text-gray-900 '>Projects</h1>
                <div className='grid w-full grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-5'>
                    <div className='mt-5 '>
                        <img src={Syntax} alt='syntax ui' width="30" height="30" className='mb-3 rounded-lg ' />
                        <div className='mb-1 text-sm font-medium text-gray-900 '>SyntaxUI</div>
                        <div className='mb-1 text-sm font-medium text-gray-500 '>Free-to-use UI elements designed for rapid development.</div>
                    </div>
                    <div className='mt-5 '>
                        <img src={pretty} alt='syntax ui' width="30" height="30" className='mb-3 rounded-lg ' />
                        <div className='mb-1 text-sm font-medium text-gray-900 '>Prettyfolio</div>
                        <div className='mb-1 text-sm font-medium text-gray-500 '>A curated collection of portfolios for inspiration.</div>
                    </div>
                    <div className='mt-5 '>
                        <img src={enchant} alt='syntax ui' width="30" height="30" className='mb-3 rounded-lg ' />
                        <div className='mb-1 text-sm font-medium text-gray-900 '>Enchant</div>
                        <div className='mb-1 text-sm font-medium text-gray-500 '>A vibrant theme for Visual Studio Code.</div>
                    </div>
                    <div className='mt-5 '>
                        <img src={portfolio} alt='syntax ui' width="30" height="30" className='mb-3 rounded-lg ' />
                        <div className='mb-1 text-sm font-medium text-gray-900 '>Ansubkhan.com</div>
                        <div className='mb-1 text-sm font-medium text-gray-500 '>My personal website, blogs and newsletter.</div>
                    </div>
                    <div className='mt-5 '>
                        <img src={quote} alt='syntax ui' width="30" height="30" className='mb-3 rounded-lg ' />
                        <div className='mb-1 text-sm font-medium text-gray-900 '>Qoute Vault</div>
                        <div className='mb-1 text-sm font-medium text-gray-500 '>Social media, but for sharing quotes.</div>
                    </div>
                </div>
            </div>
            <div className='mt-16 '>
                <h1 className='mb-4 text-lg font-medium text-gray-900 '>
                    Latest Blogs
                </h1>
                <div className='flex flex-col p-2 mb-4 space-y-1 border rounded-lg '>
                    <div className='flex flex-col w-full pl-2 '>
                        <div className='flex items-center gap-2 '>
                            <div className='block '>
                                <p className='text-lg tracking-tight text-gray-900 '>My Crazy Ride in Tech</p>
                                <p className='mt-1 text-sm tracking-tight text-gray-500 '>
                                    How my unexpected firing leads to career redemption and valuable life lessons in the unpredictable world of tech.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col p-2 mb-4 space-y-1 border rounded-lg '>
                    <div className='flex flex-col w-full pl-2 '>
                        <div className='flex items-center gap-2 '>
                            <div className='block '>
                                <p className='text-lg tracking-tight text-gray-900 '>How to Add a View Counter in Next.js 14</p>
                                <p className='mt-1 text-sm tracking-tight text-gray-500 '>Learn how to add a view counter to your Next.js 14 app using Partial Pre-Rendering and Upstash Redis.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <p className='text-sm hover:underline'>Read More</p>
            </div>
            <div className='mt-16 '>
                <div className='mt-1 '>
                    <h1 className='mb-4 text-lg font-medium text-gray-900 '>Luminary Newsletter</h1>
                    <p className='mt-4 text-gray-500 '>
                        Stay ahead of the curve with my monthly newsletter called Luminary. Receive valuable insights on the latest trends, techniques, and tools in web development and design.
                    </p>
                    <form className='relative '>
                        <input className='w-full p-3 px-2 mt-4 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent' placeholder='Enter Your Email' />
                        <button className='absolute inline-block px-2 py-2 text-xs text-white bg-gray-900 rounded-md hover:bg-gray-700 top-6 right-1 disabled:opacity-80' type='submit' disabled>Subscribe</button>
                    </form>
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

export default About;