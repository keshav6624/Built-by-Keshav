import type { Metadata } from 'next';
import { Inter, Geist } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import MotionProvider from '@/components/layout/MotionProvider';
import Script from 'next/script';

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
      <body className="bg-background text-text antialiased font-body">
        <Script id="theme-bootstrap" strategy="beforeInteractive">
          {`try {
            const theme = localStorage.getItem('theme');
            if (theme === 'light' || theme === 'dark') {
              document.documentElement.dataset.theme = theme;
              document.documentElement.style.colorScheme = theme;
            }
          } catch {}`}
        </Script>
        <MotionProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
