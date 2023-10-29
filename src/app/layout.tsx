import { PropsWithChildren } from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Cibulka / ThinkEasy',
  description: 'Test assignment from ThinkEasy made by www.cibulka.codes.',
};

export default async function RootLayout(props: PropsWithChildren) {
  return (
    <>
      <html lang="en">
        <body className={inter.className}>
          <div id="app">{props.children}</div>
        </body>
      </html>
    </>
  );
}
