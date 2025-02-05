import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import StyledJsxRegistry from '@/lib/registry';
import { ReactNode } from 'react';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledJsxRegistry>
          <Providers>{children}</Providers>
        </StyledJsxRegistry>
      </body>
    </html>
  );
}
