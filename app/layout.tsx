//local
import './globals.css';
import Nav from 'components/Nav';

//external
import type { Metadata } from 'next';

import Header from './components/Header';
import Landing from './components/Landing';
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
      <html lang="en" className={`${fontHead.variable} ${fontBody.variable}`}>

         <head>
         </head>

         <body>

            {/* Landing */}
            <Landing />

            {/* Evernything else */}
            <div className='h-screen bg-grey-200'>
               {/* w is the screen - scrollbar gutter */}
               <div className="absolute top-0 left-0 w-[calc(100vw-14px)] font-body text-grey-950 bg-grey-200 selection:bg-ax1-300">

                  <Header>
                     Hillside Evangelical Church, Greystones
                  </Header>

                  <Nav />
                  
                  <div className='w-full'>
                     {children}
                  </div>

                  {/* <div className='flex justify-center items-start z-0 bg-inherit pr-64'>
                     <div className='nav-scroll sticky top-0 hidden lg:block w-64 h-screen overflow-y-auto'>
                        <Nav />
                     </div>
                     
                  </div> */}

               </div>
            </div>
            {/* <GtagScriptInit /> */}
         </body>


      </html>
   )
}