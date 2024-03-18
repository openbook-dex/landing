import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Footer from './component/shared/Footer/Footer';
import TopBar from './component/shared/AppBar/TopBar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Openbook DEX',
  description: 'The community-led central limit order book at the heart of Solana DeFi',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <TopBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
