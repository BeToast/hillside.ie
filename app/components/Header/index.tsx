const Header: React.FC<{
   children: React.ReactNode,
}> = ({
   children,
}) => {
      return (<>
         <div className='header'>
            <div className='flex justify-center items-center h-heading w-full z-40 bg-grey-50'>
               <div className='font-head text-5xl tracking-widest pt-4'>
                  {children}
               </div>
            </div>
            <div className="h-[1px] w-full bg-grey-500" />
         </div>
      </>);
   }

export default Header;