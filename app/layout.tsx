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
        {/* <div className='flex flex-col items-center h-full'> */}
          {/* <div className='w-64 fixed hidden lg:block inset-0 overflow-y-auto'>
            <Nav/>
          </div>
          <div className='block lg:ml-64 xl:pr-64 z-10 min-h-screen bg-red-50'>
            {children}
            <div className='w-64 fixed hidden xl:block z-20 top-0 right-0 min-h-full overflow-y-auto bg-green-50'>

            </div>
          </div> */}
        <div className='flex items-start justify-center min-h-screen'>
          <div className='w-64 hidden lg:block min-h-full overflow-y-auto'>
            <Nav/>
          </div>
          <div className='block min-h-full bg-red-50'>
            {children}
          </div>
          <div className='w-64 hidden xl:block min-h-full overflow-y-auto bg-green-50'>

          </div>
        </div>

        <GtagScriptInit />
      </body>
    </html>
  )
}