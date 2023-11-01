// 'use client'

// import { hideHrAtTopClass } from "components/PageContent/Hr/static";

// const ScrollHandler: React.FC<{

// }> = ({
  
// }) => {

//   // const fadeIn:HTMLCollectionOf<Element> = document.getElementsByClassName('fade-in-hidden');
//   // const fadeIn:Element[] = Array.from(document.getElementsByClassName('fade-in-hidden'));
//   // const viewHeight: number = window.innerHeight;

//   // const checkItems = () => {
//   //   for(let i = 0; i < fadeIn.length; i++){
//   //     var currItem = fadeIn[i];
//   //     if(currItem){
//   //       checkItem(currItem);
//   //     }
//   //   }
//   // }

//   // const checkItem = (item: Element) => {
//   //   if(item){
//   //     var itemTop = item.getBoundingClientRect().top;
//   //     if ( itemTop > 0 && itemTop < viewHeight){
//   //       item.classList.add("fade-in-shown");
//   //       item.classList.remove("fade-in-hidden");
//   //     }
//   //   }
//   // }

//   ////////////////////// Hr element scroll handler //////////////////////
//   //get hideHrAtTopEls by className
//   const hideHrAtTopEls:Element[] = Array.from(document.getElementsByClassName(hideHrAtTopClass));
//   //custom object to store every el and their start y position
//   var hideHrAtTopObj: {el: Element, startTop: number}[] = [];
//   //populate 'hideHrAtTopObj'
//   hideHrAtTopEls.forEach((el: Element) => {
//     hideHrAtTopObj.push({el: el, startTop: el.getBoundingClientRect().top});
//   });


//   console.log(hideHrAtTopObj);
  
//   const hideHrAtTopHandler = () => {
//     hideHrAtTopObj.forEach((elObj: {el: Element, startTop: number}) => {
//       const currTop = elObj.el.getBoundingClientRect().top;
//       if(currTop < elObj.startTop){
//         elObj.el.classList.add('bg-grey-800');
//         elObj.el.classList.remove('bg-transparent');
//       }else if(currTop >= elObj.startTop){
//         elObj.el.classList.add('bg-transparent');
//         elObj.el.classList.remove('bg-grey-800');
//       }
//     });
//   }

//   const scrollHandler = (e?: Event) => {
//     hideHrAtTopHandler();

//   }
  
//   scrollHandler();
//   document.onscroll = scrollHandler;

//   return(<></>);
// }

// export default ScrollHandler;












// 'use client'

// import { afterH1Class, hideHrAtTopClass } from "components/PageContent/Hr/static";

// const ScrollHandler: React.FC<{
//   mainId: string,
// }> = ({
//   mainId,
// }) => {

//   new Promise<JQuery<HTMLElement>>((resolve, reject) => {
//     const checkForMainEl = () => {
//       var mainEl = $('main#'+mainId);
//       if (mainEl.length > 0) {
//         resolve(mainEl);
//       } else if (attempts < 10) { // Limit the number of attempts to prevent infinite loop
//         attempts++;
//         setTimeout(checkForMainEl, 300);
//       } else {
//         reject(new Error(`Element with ID ${mainId} not found.`));
//       }
//     };

//     let attempts = 0;
//     checkForMainEl();

//   }).then((mainEl) => {
//     let widthGrow:Element[] = Array.from(mainEl.find('.width-grow-0'));

//       ////////////////////// Hr element scroll handler //////////////////////
//   //get hideHrAtTopEl by className
//   const hideHrAtTopEl:Element = mainEl.getElementsByClassName(hideHrAtTopClass)[0];
//   //get afterH1El by className. this is the image on the page directly after H1 el
//   const afterH1El:Element = mainEl.getElementsByClassName(afterH1Class)[0];

//   ///// check if hideHr is enabled and afterH1 image is present !!! /////
//   const hideHrActive: boolean = ((hideHrAtTopEl !== undefined && afterH1El !== undefined) ? true : false);

//   const hideHrAtTopHandler = () => {
//     const currTop = hideHrAtTopEl.getBoundingClientRect().top;
//     const showBreakpoint = afterH1El.getBoundingClientRect().top + 2;
    
//     if(currTop > showBreakpoint){
//       hideHrAtTopEl.classList.add('bg-grey-800');
//       hideHrAtTopEl.classList.remove('bg-transparent');
//     }else if(currTop <= showBreakpoint){
//       hideHrAtTopEl.classList.add('bg-transparent');
//       hideHrAtTopEl.classList.remove('bg-grey-800');
//     }
//   }

//   const scrollHandler = (e?: Event) => {
//     if(hideHrActive) hideHrAtTopHandler();

//   }
  
//   scrollHandler();
//   document.onscroll = scrollHandler;
    
//     $(document).on('scroll', () => scrollHandler(widthGrow)) ;

//   }).catch(() => {
//     //TODO: make this proper
//     console.warn('no main el found bruh');
//   });

//   return(<></>);
// }

// export default ScrollHandler;
