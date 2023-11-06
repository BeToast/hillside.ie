'use client'

import $ from 'jquery';
import { useEffect } from 'react';


// $(window).on('load', () => {

// });


const Helpers: React.FC<{
  
}> = ({
  
}) => {
  //run once landing is fully loaded
  useEffect(() => {
    const landingEl = $('#Landing');
    if(landingEl.length > 0){
      //make body 0x0px
      // $('.sugnoma').addClass('sugnoma-hide');
      // $('.sugnoma').removeClass('sugnoma-show');

      //move landing to back
      // landingEl.addClass('-z-50');
      // landingEl.removeClass('z-50');


      // landingEl.addClass('');
      // landingEl.removeClass('');
    }
  }, []);
  
  return(<></>);
}
export default Helpers;