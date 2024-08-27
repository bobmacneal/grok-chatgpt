import "./globals.css"

import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Link from "next/link"

import { SessionProvider } from "./components/SessionProvider"
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
        <body className={`${inter.className} px-2 md:px-5`}>
          <header className='bg-slate-500 p-2 font-bold text-white'>
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
          <div className='flex flex-col md:flex-row'>
            <div className='grow'>{children}</div>
          </div>
        </body>
      </html>
    </SessionProvider>
  )
}
