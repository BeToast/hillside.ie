'use client'

import $ from 'jquery'

export const setScrollHandlerHr = () => {
  if(typeof window !== undefined) {
    $(window).on('scroll', function() {
      
    });
  }
}