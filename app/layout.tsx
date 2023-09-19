import './globals.css'
import type { Metadata } from 'next'

// font
import { Vesper_Libre, Arimo, } from 'next/font/google';
const fontHead = Vesper_Libre({
  subsets: ['latin'],
  weight: ["400"],
  variable: '--font-head',
});
const fontBody = Arimo({
  subsets: ['latin'],
  weight: ["400", "500", "600", "700"],
  variable: '--font-body',
});

export const metadata: Metadata = {
  title: 'Hillside Evangelical',
  description: 'Hillside Evangelical Church, Greystones',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en" className={`${fontHead.variable} ${fontBody.variable} scroll-smooth`}>
      <head>
      </head>
      <body className="h-screen w-screen">
        {children}
      </body>
    </html>
  )
}
