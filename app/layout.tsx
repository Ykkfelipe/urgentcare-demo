import './globals.css';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'Sunnyside Barber Shop',
  description: 'Barber shop in Old Ottawa South',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans bg-white text-gray-800">
        {children}
      </body>
    </html>
  );
}
