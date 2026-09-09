import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Project 1788984402758',
  description: 'Osteria Luciano is an upscale, reservation-only Italian restaurant website centered on handmade pasta, regional wines, Chef Marco Rossini’s heritage, and intimate private dining. The experience should feel warm, refined, exclusive, and deeply rooted in Italian culinary tradition.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: '#F9F7F2', margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
