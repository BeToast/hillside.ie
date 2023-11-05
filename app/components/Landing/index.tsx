'use client'

import { useEffect } from 'react';
import $ from 'jquery';
import Image from 'next/image'

import Button from 'components/Landing/Button';
import Helpers from 'components/Landing/Helpers';
import { landingBgPath, } from './static';

/*
  TODO: this anint right yo
  Image to be called in document as € [file]$[hero text]
  
  example:
    € click.webp?Welcome to my Church!

*/

const Landing: React.FC<{

}> = ({

}) => {
  console.log(landingBgPath);

  const landingEl = <>
    <div id='Landing' className="absolute inset-0 bg-ax1-400 bg-opacity-25 z-50" >
      <Image 
        className='relative'
        src={landingBgPath}
        alt={'greystones arial image'}
        quality={100}
        priority={true}
        // placeholder='blur'
        fill
      />
      <div className="absolute inset-0 flex-col h-full w-full flex items-center justify-center">
        <div className="text-7xl font-head mb-10">
          Hello
        </div>
        <Button/>
      </div>
    </div>
    <Helpers/>
  </>
  

  return(landingEl);
}

export default Landing;