import React from 'react';

export default function Footer() {
    return (
        <footer className='flex justify-center items-center py-4 border-t'>
            <p className='text-sm text-gray-500'>
                Made with{' '}
                <span role='img' aria-label='love'>
                    ❤️
                </span>{' '}
                by{' '}
                <a
                    href='https://ezzdinatef.com'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-teal-700 hover:underline'
                >
                    Ezzdine Atef
                </a>
            </p>
        </footer>
    );
}
