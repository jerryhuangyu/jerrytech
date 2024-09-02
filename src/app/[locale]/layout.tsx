import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';
import { webMeta } from '@/src/constants/metadata';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: webMeta.title,
  description: webMeta.description,
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
      <Script type="text/javascript" async defer src="/console.js" />
      <body className={inter.className}>{children}</body>
      <GoogleAnalytics gaId="G-L8B625QVXC" />
    </html>
  );
}
