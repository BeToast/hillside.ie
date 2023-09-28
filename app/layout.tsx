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
      <body className="">
        <div className='flex items-start justify-center'>
          <div className='relative'>
            {/* left */}
            <div className='absolute'>
              <div className='fixed hidden lg:block w-64 h-screen overflow-y-auto'>
                <Nav/>
              </div>
            </div>
            {/* middle */}
            <div className='relative lg:ml-64 xl:pr-64 z-10'>
              {children}

              
            </div>
            {/* right */}
            <div className='absolute top-0 right-64 z-20'>
              <div className='fixed hidden xl:block w-64 h-screen overflow-y-auto'>
                <Nav/>
              </div>
            </div>
            
          </div>
        </div>

        <GtagScriptInit />
      </body>
    </html>
  )
}