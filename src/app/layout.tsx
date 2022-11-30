import "../styles/globals.css";

import { DM_Mono, Inter } from '@next/font/google';

import Layout from 'components/Layout';

const sans = Inter({
  variable: '--font-sans',
  weight: ['400', '500'],
  style: 'normal',
  subsets: ['latin'],
});

const mono = DM_Mono({
  variable: '--font-mono',
  weight: ['400', '500'],
  style: 'normal',
  subsets: ['latin'],
});

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
