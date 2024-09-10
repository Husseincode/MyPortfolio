/** @format */

import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { PageContext } from '@/contexts/pageContext';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

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
        <body
          className={`${geistSans.variable} ${geistMono.variable} transition duration-500 antialiased`}>
          {children}
        </body>
      </html>
    </PageContext>
  );
}
