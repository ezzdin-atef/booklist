import BoxsSection from '@/components/BoxsSection';
import HeroSection from '@/components/HeroSection';
import Image from 'next/image';
import books from '@/data/books.json';

export default function Home() {
    return (
        <main>
            <HeroSection />
            <BoxsSection books={books} />
        </main>
    );
}
