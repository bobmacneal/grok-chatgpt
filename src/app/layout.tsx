import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Grok ChatGPT',
  description: 'Grok ChatGPT is a GrokEarth application',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.className} px-2 md:px-5`}>
        <header className='bg-slate-500 p-2 text-xl font-bold text-white'>
          <div className='flex flex-grow'>
            <Link href='/'>GPT Chat</Link>
            <Link href='/about' className='ml-6 font-light'>
              About
            </Link>
          </div>
          <div className='border border-lime-500' />
        </header>
        <div className='flex flex-col md:flex-row'>
          <div className='flex-grow'>{children}</div>
        </div>
      </body>
    </html>
  );
}
