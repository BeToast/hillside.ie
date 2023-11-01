'use client'

import { setScrollHandlerHr } from "./client";

const Hr: React.FC<{
  className?: string,
  showHrBeforeScroll?: boolean,
}> = ({
  className = '',
  showHrBeforeScroll = true,
}) => {

  if(!showHrBeforeScroll){
    setScrollHandlerHr();
  }

  return(<>
    <div className={`Hr ${className} h-[1px] bg-grey-800 rounded-lg mx-4 ${(showHrBeforeScroll ? 'block' : 'hidden')}`} />
  </>);
}
export default Hr;