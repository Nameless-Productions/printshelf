import React from 'react'
import "./globals.css"

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang='en'>
      <body className='bg-neutral-900'>
        <main className='m-1 prose text-neutral-100 prose-headings:text-neutral-100'>
          {children}
        </main>
      </body>
    </html>
  )
}
