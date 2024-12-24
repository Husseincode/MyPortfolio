/** @format */

import type { Metadata } from 'next';
//import localFont from 'next/font/local';
import './globals.css';
import { PageContext } from '@/contexts/pageContext';
import { Toaster } from 'react-hot-toast';
//import Head from 'next/head';

// const geistSans = localFont({
//   src: './fonts/GeistVF.woff',
//   variable: '--font-geist-sans',
//   weight: '100 900',
// });
// const geistMono = localFont({
//   src: './fonts/GeistMonoVF.woff',
//   variable: '--font-geist-mono',
//   weight: '100 900',
// });

export const metadata: Metadata = {
  title: 'My Portfolio',
  description: 'My Portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <PageContext>
      <html lang='en-US'>
        <head>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <link
            rel='stylesheet'
            href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'
          />
        </head>
        <body className={` transition duration-500 antialiased`}>
          {children}
          <Toaster />
        </body>
      </html>
    </PageContext>
  );
}
