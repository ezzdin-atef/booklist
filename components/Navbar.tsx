import Link from 'next/link';
import React from 'react';

export default function Navbar() {
    return (
        <header className='flex justify-between items-center py-4 border-b'>
            <h1 className='text-2xl font-bold text-teal-700'>
                <Link href={'/'}>Booklist</Link>
            </h1>
            <div>
                <label
                    htmlFor='default-search'
                    className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'
                >
                    Search
                </label>
                <div className='relative'>
                    <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                        <svg
                            aria-hidden='true'
                            className='w-5 h-5 text-gray-500 dark:text-gray-400'
                            fill='none'
                            stroke='currentColor'
                            viewBox='0 0 24 24'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                stroke-linecap='round'
                                stroke-linejoin='round'
                                stroke-width='2'
                                d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                            ></path>
                        </svg>
                    </div>
                    <input
                        type='search'
                        id='default-search'
                        className='block w-80 bg-gray-100 py-4 px-4 pl-10 text-sm text-gray-900 rounded-xl dark:placeholder-gray-400 dark:text-white focus:outline-none'
                        placeholder='Search Mockups, Logos...'
                        required
                    />
                </div>
            </div>
        </header>
    );
}
