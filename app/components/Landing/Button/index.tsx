'use client'

import $ from 'jquery';

export const hideLanding = () => {
  const landingOuterEl = $('#Landing-outer');
  const landingInnerEl = $('#Landing-inner');
  
  landingOuterEl.addClass('pointer-events-none');
  landingInnerEl.addClass('landing-inner-hide');
  landingInnerEl.removeClass('landing-inner-show');
}

const Button: React.FC<{
  
}> = ({
  
}) => {
  return(<>
    <button 
      onClick={hideLanding}
      className="p-2 rounded-lg bg-pri-200 hover:bg-pri-300 shadow-sm"
    >
      go away lul :P
    </button>
  </>);
}

export default Button;