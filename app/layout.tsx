import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Osteria Luciano | Italian Dining in New York',
  description: 'Handmade pasta, regional Italian wines, and gracious hospitality in the heart of Greenwich Village.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
