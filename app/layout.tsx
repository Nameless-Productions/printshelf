import React from 'react'
import "./globals.css"
import Link from 'next/link'

export default function RootLayout({children}: {children: React.ReactNode}) {
  const linkClass = "font-bold";
  return (
    <html lang='en'>
      <body className='bg-neutral-900'>
        <nav className='flex text-neutral-100 border-b p-2 items-center space-x-3'>
          <Link href="/" className='text-2xl font-bold'>PrintShelf</Link>
          <Link href="/" className={linkClass}>Home</Link>
          <Link href="/prints" className={linkClass}>Prints</Link>
        </nav>
        <main className='prose m-1 text-neutral-100 prose-headings:text-neutral-100'>
          {children}
        </main>
      </body>
    </html>
  )
}
