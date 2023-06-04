import React from 'react';
import BookBox from './BookBox';

export default function BoxsSection({ books }: { books: IBook[] }) {
    return (
        <div className='py-4'>
            <h4 className='text-xl font-semibold pb-3'>Discover</h4>
            <div className='grid grid-cols-5 gap-4'>
                {books.map(book => (
                    <BookBox key={book.title} {...book} />
                ))}
            </div>
        </div>
    );
}
