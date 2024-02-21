import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { webMeta } from '@/constants/metadata';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: webMeta.title,
  openGraph: {
    title: webMeta.title,
    description: webMeta.description,
    url: 'https://jerrytech.vercel.app/',
    siteName: 'jerrytech',
    images: [
      {
        url: webMeta.image
      }
    ],
    type: 'website'
  },
  description: webMeta.description
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
