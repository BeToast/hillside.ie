'use client'
import $ from 'jquery';
import { afterH1Class, hideHrAtTopClass } from "components/PageContent/Hr/static";

const ScrollHandler: React.FC<{
  mainId: string,
}> = ({
  mainId,
}) => {

  new Promise<JQuery<HTMLElement>>((resolve, reject) => {
    const checkForMainEl = () => {
      var mainEl = $('main#'+mainId);
      if (mainEl.length > 0) {
        resolve(mainEl);
      } else if (attempts < 10) { // Limit the number of attempts to prevent infinite loop
        attempts++;
        setTimeout(checkForMainEl, 300);
      } else {
        reject(new Error(`Element with ID ${mainId} not found.`));
      }
    };

    let attempts = 0;
    checkForMainEl();

  }).then((mainEl) => {
    ////////////////////// Hr element scroll handler //////////////////////
    //get hideHrAtTopEl by className
    const hideHrAtTopEl:Element = mainEl.find(`.${hideHrAtTopClass}`)[0];
    //get afterH1El by className. this is the image on the page directly after H1 el
    const afterH1El:Element = mainEl.find(`.${afterH1Class}`)[0];
    ///// check if hideHr is enabled and afterH1 image is present !!! /////
    const hideHrActive: boolean = ((hideHrAtTopEl !== undefined && afterH1El !== undefined) ? true : false);

    const hideHrAtTopHandler = () => {
      const currTop = hideHrAtTopEl.getBoundingClientRect().top;
      const showBreakpoint = afterH1El.getBoundingClientRect().top + 2;
      
      if(currTop > showBreakpoint){
        hideHrAtTopEl.classList.add('bg-grey-800');
        hideHrAtTopEl.classList.remove('bg-transparent');
      }else if(currTop <= showBreakpoint){
        hideHrAtTopEl.classList.add('bg-transparent');
        hideHrAtTopEl.classList.remove('bg-grey-800');
      }
    }

    const scrollHandler = (e?: Event) => {
      if(hideHrActive) hideHrAtTopHandler();

    }
    
    scrollHandler();
    document.onscroll = scrollHandler;
      

  }).catch(() => {
    //TODO: make this proper
    console.warn('no main el found bruh');
  });

  return(<></>);
}

export default ScrollHandler;
