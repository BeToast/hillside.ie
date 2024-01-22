export default function Layout({
   children,
}: {
   children: React.ReactNode,
}) {

   // const vertLine = <>
   //    <div className='w-[1px] bg-grey-300' />
   // </>

   return (<>
      {/* <div className='lg:w-lg bg-grey-100 min-h-screen' > */}
      <div className='w-full bg-grey-100 min-h-screen' >

         <div className='flex flex-row flex-nowrap bg-inherit '>
            {/* {vertLine} */}

            {children}

            {/* {vertLine} */}
         </div>

      </div>
   </>);
}