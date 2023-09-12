'use client';

import Link from 'next/link';
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next App',
  description: 'next app',
}

const RootLayout = ({ children }) => {
  console.log('From RootLayout');
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
export default RootLayout;
