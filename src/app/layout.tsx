import "../styles/globals.css";

import { DM_Mono, Inter } from "next/font/google";

import Header from "components/Header";
import Footer from "components/Footer";

const sans = Inter({
  variable: "--font-sans",
  weight: ["400", "500"],
  style: "normal",
  subsets: ["latin"],
});

const mono = DM_Mono({
  variable: "--font-mono",
  weight: ["400", "500"],
  style: "normal",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body>
        <Header />
        <main
          className="container mx-auto max-w-screen-lg px-4 mt-16"
          style={{ maxWidth: "720px" }}
        >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
