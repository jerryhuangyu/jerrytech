import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { webMeta } from '@/src/constants/metadata';

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
        url: webMeta.image,
        width: 1200,
        height: 630
      }
    ],
    type: 'website'
  },
  description: webMeta.description,
  other: {
    'google-site-verification': 'nCM1VbRw6kcf75_lXHWs8ZpTlZPwCxCyaURqDLzypK0'
  }
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
