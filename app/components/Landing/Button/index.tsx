'use client'

import $ from 'jquery';

export const hideLanding = () => {
  console.log('go away');
  $('.sugnoma').addClass('sugnoma-show');
  $('.sugnoma').removeClass('sugnoma-hide');
  // $('#Landing').addClass('hidden');
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