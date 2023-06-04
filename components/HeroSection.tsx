import Image from 'next/image';
import React from 'react';

export default function HeroSection() {
    return (
        <div className='bg-gray-100 rounded-xl py-4 px-8 my-5 flex justify-between items-center gap-8'>
            <div className='flex flex-col gap-3'>
                <h3 className='text-2xl font-semibold leading-8'>
                    <span className='text-teal-700'>Discover</span> tips, ideas, book lists and more to improve your
                    skills to another level.
                </h3>
                <p className='text-gray-500'>
                    Discover a curated collection of must-read books for software developers. Explore topics like clean
                    coding, algorithms, design patterns, and more. Level up your programming skills with our handpicked
                    recommendations.
                </p>
                <div>
                    <button className='text-sm bg-teal-600 text-white px-4 whitespace-nowrap py-2 rounded-lg hover:bg-teal-700'>
                        Discover Now
                    </button>
                </div>
            </div>
            <Image src='/book-lovers.svg' alt='book lovers' className='w-4/12' width={200} height={200} />
        </div>
    );
}
