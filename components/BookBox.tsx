'use client';
import Image from 'next/image';
import React, { Fragment } from 'react';
import { FaHeart, FaStar } from 'react-icons/fa';
import { Popover, Transition } from '@headlessui/react';

// export default function BookBox(book: IBook) {
//     return (
//         <div className='flex justify-center items-start gap-3 p-3 rounded-lg hover:shadsow-lg bg-gray-50 overflow-hidden w-full'>
//             <Image
//                 src={book.cover}
//                 className='overflow-hidden rounded shrink-0'
//                 alt={book.title}
//                 width={170}
//                 height={220}
//             />
//             <div className='flex flex-col gap-1'>
//                 <h6 className='text-lg font-medium'>{book.title}</h6>
//                 <p className='text-sm text-gray-500'>By {book.author}</p>
//                 <div className='flex gap-1'>
//                     {Array.from({ length: 5 }).map((_, index) => (
//                         <FaStar
//                             key={index}
//                             className={`${index < parseInt(book.rate) ? 'text-yellow-400' : 'text-gray-300'}`}
//                         />
//                     ))}
//                 </div>
//                 <p className='text-sm text-gray-500'>{book.description.slice(0, 100)}</p>
//                 <div className='flex flex-wrap gap-1 text-xs mb-2 mt-1 text-gray-500'>{book.tags.join(', ')}</div>
//                 <div className='flex gap-2 text-xs'>
//                     <a
//                         href={book.previewLink}
//                         target='_blank'
//                         rel='noopener noreferrer'
//                         className='bg-teal-700 text-white px-4 whitespace-nowrap py-2 rounded-lg hover:bg-teal-600'
//                     >
//                         Download
//                     </a>
//                     <button className='bg-gray-200 text-gray-700 py-2 px-2 whitespace-nowrap rounded-full hover:bg-gray-300'>
//                         <FaHeart />
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// }

export default function BookBox(book: IBook) {
    return (
        <Popover className='relative'>
            {({ open }) => (
                <>
                    <Popover.Button className='w-full'>
                        <div className='relative bg-gray-50 hover:bg-gray-100 gap-3 rounded-xl p-4 mt-20 w-full'>
                            <div className='absolute -top-16 left-0 right-0'>
                                <Image
                                    src={book.cover}
                                    className='overflow-hidden rounded mx-auto'
                                    alt={book.title}
                                    width={120}
                                    height={170}
                                />
                            </div>
                            <div className='flex flex-col gap-2 mt-24 justify-center items-center'>
                                <h4 className='text-lg font-medium'>{book.title}</h4>
                                <p className='text-sm text-gray-500'>{book.author}</p>
                                <div className='flex gap-1'>
                                    {Array.from({ length: 5 }).map((_, index) => (
                                        <FaStar
                                            key={index}
                                            className={`${
                                                index < parseInt(book.rate) ? 'text-yellow-400' : 'text-gray-300'
                                            }`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Popover.Button>
                    <Transition
                        as={Fragment}
                        enter='transition ease-out duration-200'
                        enterFrom='opacity-0 translate-y-1'
                        enterTo='opacity-100 translate-y-0'
                        leave='transition ease-in duration-150'
                        leaveFrom='opacity-100 translate-y-0'
                        leaveTo='opacity-0 translate-y-1'
                    >
                        <Popover.Panel className='absolute left-1/2 z-10 mt-3 w-96 max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl'>
                            <div className='overflow-hidden bg-white p-4 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5'>
                                <div className='flex flex-col gap-1'>
                                    <h6 className='text-lg font-medium'>{book.title}</h6>
                                    <p className='text-sm text-gray-500'>{book.author}</p>
                                    <div className='flex gap-1'>
                                        {Array.from({ length: 5 }).map((_, index) => (
                                            <FaStar
                                                key={index}
                                                className={`${
                                                    index < parseInt(book.rate) ? 'text-yellow-400' : 'text-gray-300'
                                                }`}
                                            />
                                        ))}
                                    </div>
                                    <p className='text-sm text-gray-500'>{book.description.slice(0, 100)}</p>
                                    <div className='flex flex-wrap gap-1 text-xs mb-2'>
                                        {book.tags.map((tag, index) => (
                                            <span
                                                key={index}
                                                className='bg-gray-200 text-gray-700 px-2 py-1 rounded-lg text-xs mr-1'
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <div className='flex gap-2 text-xs'>
                                        <a
                                            href={book.previewLink}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className='bg-teal-700 text-white px-4 whitespace-nowrap py-2 rounded-lg hover:bg-teal-600'
                                        >
                                            Purchase
                                        </a>
                                        <a
                                            href={book.downloadLink}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className='bg-gray-200 text-gray-700 px-4 whitespace-nowrap py-2 rounded-lg hover:bg-gray-300'
                                        >
                                            Download
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Popover.Panel>
                    </Transition>
                </>
            )}
        </Popover>
    );
}
