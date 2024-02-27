import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { AOSInit } from '@/animations/aos';
import Nav from '@/components/Nav';

const poppins = Poppins({
  weight: ['100', '200', '300', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Nabin Islam',
  description: 'Front-end Developer from Bangladesh',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AOSInit />
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
