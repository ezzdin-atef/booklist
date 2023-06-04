import React from 'react';
import books from '@/data/books.json';
import Image from 'next/image';
import { FaBuysellads, FaDownload, FaShoppingBag, FaStar } from 'react-icons/fa';
import { GiPapers } from 'react-icons/gi';

const book = books[0];

export default function page({
    params,
    searchParams,
}: {
    params: { slug: string };
    searchParams: { [key: string]: string | string[] | undefined };
}) {
    return (
        <div className='flex justify-center items-start gap-3 p-3 overflow-hidden w-full'>
            <div className='shrink-0'>
                <Image
                    src={book.cover}
                    className='overflow-hidden rounded shrink-0'
                    alt={book.title}
                    width={250}
                    height={300}
                />
                <span className='text-gray-500 py-1 text-sm text-center bg-gray-50 rounded'>{book.pages} page</span>
            </div>
            <div className='flex flex-col gap-2 grow-0'>
                <h6 className='text-xl font-semibold'>{book.title}</h6>
                <p className='text-gray-500'>By {book.author}</p>
                <div className='flex gap-1'>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <FaStar
                            key={index}
                            className={`${index < parseInt(book.rate) ? 'text-yellow-400' : 'text-gray-300'}`}
                        />
                    ))}
                </div>
                <p className=' text-gray-500 leading-7'>{book.description.slice(0, 400)}</p>
                <div className='flex flex-wrap gap-1 text-sm mb-2 mt-1'>
                    {book.tags.map((tag, index) => (
                        <span key={index} className='bg-gray-200 text-gray-700 px-2 py-1 rounded-lg mr-1'>
                            {tag}
                        </span>
                    ))}
                </div>
                <div className='flex gap-2 text-sm'>
                    <a
                        href={book.previewLink}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex items-center gap-2 bg-teal-700 text-white px-4 whitespace-nowrap py-2 rounded-lg hover:bg-teal-600'
                    >
                        <FaShoppingBag />
                        Purchase
                    </a>
                    <a
                        href={book.downloadLink}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex items-center gap-2 bg-gray-200 text-gray-700 px-4 whitespace-nowrap py-2 rounded-lg hover:bg-gray-300'
                    >
                        <FaDownload />
                        Download
                    </a>
                </div>
            </div>
        </div>
    );
}
