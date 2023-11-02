//local
import './globals.css';
import Nav from 'components/Nav';

//external
import type { Metadata } from 'next';
import GtagScriptInit from 'components/Gtag/GtagScriptInit';

// font
import { Vesper_Libre, Arimo, } from 'next/font/google';
import Header from './components/Header';
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
    <html lang="en" className={`${fontHead.variable} ${fontBody.variable}`}>

      <head>
      </head>

      {/* top-1/2 left-1/2 */}
      <body id='body' className='w-5 h-5 overflow-clip'>
        {/* w is the screen - scrollbar gutter */}
        <div className="w-[calc(100vw-14px)] font-body text-grey-950 bg-grey-200 selection:bg-ax1-300">
    
          <Header>
            Hillside Evangelical Church, Greystones
          </Header>
          
          <div className='flex justify-center items-start z-0 bg-inherit'>
            <div className='nav-scroll sticky top-0 hidden lg:block w-64 h-screen overflow-y-auto'>
              <Nav/>
            </div>
            {children}
            <div className='nav-scroll sticky top-0 hidden xl:block w-64 h-screen overflow-y-auto'>
              {/* <Nav/> */}
            </div>
          </div>

        </div>
        {/* <GtagScriptInit /> */}
      </body>
      

    </html>
  )
}