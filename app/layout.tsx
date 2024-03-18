import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Footer from './component/shared/Footer/Footer';
import TopBar from './component/shared/AppBar/TopBar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://openbook.ag'),
  title: 'Openbook DEX',
  description: 'The community-led central limit order book at the heart of Solana DeFi',
   keywords: ['DeFi', 'Crypto', 'Solana', 'Openbook', 'DEX', 'Finance', 'Decentralized Finance', 'Token Vaults', 'Crypto API', 'DeFi Data'],
   creator: 'Openbook DAO',
   twitter: {
    card: 'summary_large_image',
    title: 'Openbook DEX',
    description: 'The community-led central limit order book at the heart of Solana DeFi',
    siteId: '1619445807987699712',
    creator: '@openbookdex',
    creatorId: '1619445807987699712',
    images: [{
      url: 'https://i.ibb.co/XVYjN9N/OG-1.png',
      alt: 'Openbook DEX X Image'
    }],
  },
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
