'use client';

import Link from 'next/link';
import './globals.css'
import { Roboto } from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], weight: ["100", "400", "500", "700"], variable: '--font-roboto' })

export const metadata = {
  title: 'Next App',
  description: 'next app',
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={`${roboto.variable} font-roboto`}>
        {children}
      </body>
    </html>
  )
}
export default RootLayout;
