'use client'

import { useEffect } from 'react';
import $ from 'jquery';
import Image from 'next/image'
import { usePathname } from 'next/navigation';

import Button from 'components/Landing/Button';
import Helpers from 'components/Landing/Helpers';
import { landingBgPath, landingRoutes, } from './static';
import './style.css'

/*

   specifiy landing options in ./static.ts

*/

const Landing: React.FC<{

}> = ({

}) => {
      const landingEl = <>
         <div id='Landing-outer' className="absolute inset-0 bg-transparent bg-opacity-25 z-50" >
            <div id='Landing-inner' className="landing-inner-show bg-pri-200 absolute inset-0 flex-col h-full w-full flex items-center justify-center">
               <div className="text-7xl font-head mb-10 text-center">
                  Hello Simeon<br/>
                  <span className='text-4xl'>
                     this will the best photo I have of the church or location 
                  </span> 
               </div>
               <Button />
               <Image
                  className='relative object-cover -z-10'
                  src={landingBgPath}
                  alt={'greystones arial image'}
                  quality={100}
                  priority={true}
                  // placeholder='blur'
                  fill
               />
            </div>
         </div>
         <Helpers />
      </>

      //only show if specified in ./static.ts
      return (landingRoutes.has(usePathname()) ? landingEl : <></>);
   }

export default Landing;