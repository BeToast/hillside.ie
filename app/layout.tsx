import './globals.css';
import type { Metadata } from 'next';
import Nav from 'components/Nav';
import GtagScriptInit from 'components/Gtag/GtagScriptInit';

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
  children: React.ReactNode,
}) {
  return (
    <html lang="en" className={`${fontHead.variable} ${fontBody.variable} scroll-smooth`}>
      <head>
      </head>
      <body className="font-body">
        
        <div className='flex justify-center items-center h-40 w-full bg-yellow-50'>
          <div className='font-head text-5xl tracking-widest pt-4'>
            Hillside Evangelical Church, Greystones
          </div>
        </div>
        
        <div className='flex justify-center items-start'>
          <div className='sticky top-0 hidden lg:block w-64 h-screen overflow-y-auto'>
            <Nav/>
          </div>
          {children}
          <div className='sticky top-0 hidden xl:block w-64 h-screen overflow-y-auto'>
            <Nav/>
          </div>
        </div>

        <GtagScriptInit />
      </body>
    </html>
  )
}