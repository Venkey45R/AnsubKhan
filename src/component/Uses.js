import React from 'react';
import { Link } from 'react-router-dom';
import Index from './index';
import peace from '../peace.svg';
function Uses() {
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
                    <Link to="/uses" className='relative px-2 py-1 text-sm text-white bg-gray-900 rounded-md'>
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
            <div>
                <p className='text-gray-500 '>
                    My ever-evolving toolkit, comprising both hardware and software. I try to keep this list updated as much as possible.
                </p>
                <div>
                    <h1 className='mt-5 text-lg font-medium '>Desk</h1>
                    <ul className='ml-5 text-gray-500 list-disc marker:text-gray-300'>
                        <li className='my-3 space-x-1 '>
                            <span className='text-sm font-medium text-gray-900 '>MacBook Pro (16", 2023)</span>
                            <span>-</span>
                            <span className='text-sm text-gray-500 '>Probably one of the best investments I have ever made!</span>
                        </li>
                        <li className='my-3 space-x-1 '>
                            <span className='text-sm font-medium text-gray-900 '>MX Master 3s</span>
                            <span>-</span>
                            <span className='text-sm text-gray-500 '>If you have not used this mouse, you are missing out</span>
                        </li>
                        <li className='my-3 space-x-1 '>
                            <span className='text-sm font-medium text-gray-900 '>LG 27UL850</span>
                            <span>-</span>
                            <span className='text-sm text-gray-500 '>PA 4K monitor with USB-C and Ergo Stand</span>
                        </li>
                        <li className='my-3 space-x-1 '>
                            <span className='text-sm font-medium text-gray-900 '>AirPods Pro 2 </span>
                            <span>-</span>
                            <span className='text-sm text-gray-500 '>The best wireless earphones I have ever used</span>
                        </li>
                        <li className='my-3 space-x-1 '>
                            <span className='text-sm font-medium text-gray-900 '>Sony WH-1000XM4</span>
                            <span>-</span>
                            <span className='text-sm text-gray-500 '>I use them when my airpods die or PS5</span>
                        </li>
                        <li className='my-3 space-x-1 '>
                            <span className='text-sm font-medium text-gray-900 '>Magic Keyboard </span>
                            <span>-</span>
                            <span className='text-sm text-gray-500 '>This keyboard is a joy to type on</span>
                        </li>
                        <li className='my-3 space-x-1 '>
                            <span className='text-sm font-medium text-gray-900 '>Magic Trackpad </span>
                            <span>-</span>
                            <span className='text-sm text-gray-500 '>I use this for gestures</span>
                        </li>
                        <li className='my-3 space-x-1 '>
                            <span className='text-sm font-medium text-gray-900 '>Stream Deck</span>
                            <span>-</span>
                            <span className='text-sm text-gray-500 '>This thing is magical and i don't even stream</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <div>
                    <h1 className='mt-5 text-lg font-medium '>Tools</h1>
                    <ul className='ml-5 text-gray-400 list-disc marker:text-gray-300'>
                        <li className='my-3 space-x-1 '>
                            <span className='text-sm font-medium text-gray-900 '>VS Code</span>
                            <span>-</span>
                            <span className='text-sm text-gray-500 '>Favorite code editor</span>
                        </li>
                        <li className='my-3 space-x-1 '>
                            <span className='text-sm font-medium text-gray-900 '>Arc</span>
                            <span>-</span>
                            <span className='text-sm text-gray-500 '>Browser of choice</span>
                        </li>
                        <li className='my-3 space-x-1 '>
                            <span className='text-sm font-medium text-gray-900 '>Notion</span>
                            <span>-</span>
                            <span className='text-sm text-gray-500 '>For notes and personal planner</span>
                        </li>
                        <li className='my-3 space-x-1 '>
                            <span className='text-sm font-medium text-gray-900 '>Figma</span>
                            <span>-</span>
                            <span className='text-sm text-gray-500 '>For wireframing & prototyping</span>
                        </li>
                        <li className='my-3 space-x-1 '>
                            <span className='text-sm font-medium text-gray-900 '>Raycast</span>
                            <span>-</span>
                            <span className='text-sm text-gray-500 '>Spotlight search replacement + AI</span>
                        </li>
                        <li className='my-3 space-x-1 '>
                            <span className='text-sm font-medium text-gray-900 '>1Password</span>
                            <span>-</span>
                            <span className='text-sm text-gray-500 '>Password management</span>
                        </li>
                        <li className='my-3 space-x-1 '>
                            <span className='text-sm font-medium text-gray-900 '>Linear</span>
                            <span>-</span>
                            <span className='text-sm text-gray-500 '>Project management</span>
                        </li>
                        <li className='my-3 space-x-1 '>
                            <span className='text-sm font-medium text-gray-900 '>CleanShot X</span>
                            <span>-</span>
                            <span className='text-sm text-gray-500 '>For taking screenshots</span>
                        </li>
                        <li className='my-3 space-x-1 '>
                            <span className='text-sm font-medium text-gray-900 '>Screen Studio</span>
                            <span>-</span>
                            <span className='text-sm text-gray-500 '>For creating amazing videos</span>
                        </li>
                        <li className='my-3 space-x-1 '>
                            <span className='text-sm font-medium text-gray-900 '>Superhuman </span>
                            <span>-</span>
                            <span className='text-sm text-gray-500 '>Slightly expensive but I can't go back to anything else.</span>
                        </li>
                        <li className='my-3 space-x-1 '>
                            <span className='text-sm font-medium text-gray-900 '>Perplexity</span>
                            <span>-</span>
                            <span className='text-sm text-gray-500 '>This has replaced google for me.</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <h1 className='mt-5 text-lg font-medium '>Reading</h1>
                <ul className='ml-5 text-gray-400 list-disc marker:text-gray-300'>
                    <li className='my-3 space-x-1 '>
                        <span className='text-sm font-medium text-gray-900 '>Kindle Paperwhite</span>
                        <span>-</span>
                        <span className='text-sm text-gray-500 '>I love reading on this device.</span>
                    </li>
                    <li className='my-3 space-x-1 '>
                        <span className='text-sm font-medium text-gray-900 '>iPad Pro 2021</span>
                        <span>-</span>
                        <span className='text-sm text-gray-500 '>Havn't figured out a use-case for ipad tbh</span>
                    </li>
                    <li className='my-3 space-x-1 '>
                        <span className='text-sm font-medium text-gray-900 '>Audible</span>
                        <span>-</span>
                        <span className='text-sm text-gray-500 '>I use this for listening to audiobooks.</span>
                    </li>
                </ul>
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

export default Uses;