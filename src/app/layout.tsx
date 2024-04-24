import { TopBar } from '@/components/features';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import { cn } from '@/lib/utils';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Enviro',
  description: 'Control your env files with ease',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.className,
          'relative bg-white text-slate-700 dark:bg-slate-700 dark:text-neutral-50'
        )}
      >
        <TopBar />
        {children}
      </body>
    </html>
  );
}
