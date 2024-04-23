import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { DM_Sans } from 'next/font/google'
import { Rethink_Sans } from 'next/font/google'

const dm_sans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm_sans',
})
const rethink_sans = Rethink_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-rethink_sans',
})

export const metadata: Metadata = {
  title: "HS Program Finder",
  description: "A site to find programs & internships for high school students.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <script defer src="https://analytics.us.umami.is/script.js" data-website-id="a10c3e5e-b0b2-4cab-a966-b4a89cae08d1"></script>
      </head>
      <body className={dm_sans.variable + rethink_sans.variable}>
        {children}
      </body>
    </html>
  );
}
