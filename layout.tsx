import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'David Gerry | College Admissions Strategy',
  description:
    'Personalized college admissions counseling focused on essays, passion projects, application positioning, and strategic major selection.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
