import "./globals.css"

import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Link from "next/link"
import { SessionProvider } from "next-auth/react"

import { auth, signIn, signOut } from "../auth"
import UserButton from "./components/UserButton"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Grok ChatGPT",
  description: "Grok ChatGPT is a GrokEarth application",
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const session = await auth()
  if (session?.user) {
    session.user = {
      name: session.user.name,
      email: session.user.email,
      image: session.user.image,
    }
  }
  return (
    <SessionProvider basePath='/api/auth' session={session}>
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
                <UserButton
                  onSignIn={async () => {
                    "use server"

                    await signIn()
                  }}
                  onSignOut={async () => {
                    "use server"

                    await signOut()
                  }}
                />
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
