import clsx from 'clsx';
import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <body
                className={clsx({
                    'container mx-auto px-4 sm:px-6 lg:px-8': true,
                    [inter.className]: true,
                })}
            >
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
