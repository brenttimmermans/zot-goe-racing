import Footer from '@/app/components/Footer/Footer';
import Header from '@/app/components/Header/Header';
import '@/app/globals.css';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import { PropsWithChildren, ReactNode } from 'react';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: 'Zot goe racing by Brent Timmermans',
  description: 'Zot goe by Brent Timmermans - Racing portfolio',
};

type RootLayoutProps = PropsWithChildren<{
  modal: ReactNode;
}>;

export default function RootLayout({ children, modal }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        {modal}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
