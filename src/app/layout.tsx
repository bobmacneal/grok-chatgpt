import "./globals.css"

import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Link from "next/link"

import { SessionProvider } from "./components/SessionProvider" // important: keep this wrapper
import UserButton from "./components/UserButton"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Grok ChatGPT",
  description: "Grok ChatGPT is a GrokEarth application",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <SessionProvider>
      <html lang='en'>
        <body className={`${inter.className}`}>
          <header className='bg-slate-500 px-2 py-1 pr-1 font-bold text-white'>
            <div className='flex grow justify-between'>
              <div className='flex items-center'>
                <Link href='/'>Grok GPT</Link>
                <Link href='/about' className='ml-6 font-light'>
                  About
                </Link>
              </div>
              <div>
                <UserButton />
              </div>
            </div>
          </header>
          <div className='mx-2 flex flex-col md:flex-row'>
            <div className='grow'>{children}</div>
          </div>
        </body>
      </html>
    </SessionProvider>
  )
}
