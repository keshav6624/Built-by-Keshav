import type { Metadata } from 'next';
import { Inter, Geist } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import MotionProvider from '@/components/layout/MotionProvider';
import Head from 'next/head';

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const display = Geist({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Keshav — Software Engineer, Data Science & ML',
  description:
    'Building at the intersection of data, machine learning & scalable systems.',
  openGraph: {
    title: 'Keshav — Software Engineer, Data Science & ML',
    description:
      'Building at the intersection of data, machine learning & scalable systems.',
    type: 'website',
    siteName: 'Keshav',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Keshav — Software Engineer, Data Science & ML',
    description:
      'Building at the intersection of data, machine learning & scalable systems.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth" className={`${geist.variable} ${inter.variable} ${display.variable} scroll-smooth`}>
      <head>
        <Head>
          <script>
            {(function() {
              try {
                var t = localStorage.getItem('theme');
                if (t === 'light' || t === 'dark') {
                  document.documentElement.dataset.theme = t;
                  document.documentElement.style.colorScheme = t;
                }
              } catch(e) {}
            })()}
          </script>
        </Head>
      </head>
      <body className="bg-background text-text antialiased font-body">
        <MotionProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
