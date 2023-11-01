const Header: React.FC<{
  children: React.ReactNode,
}> = ({
  children,
}) => {
  return(<> 
    <div className='header'>
      <div className='flex justify-center items-center h-40 w-full z-50 bg-grey-50'>
        <div className='font-head text-5xl tracking-widest pt-4'>
          {children}
        </div>
      </div>
      <div className="h-[1px] w-full bg-grey-500" />
    {/* <div className='flex justify-center items-center h-40 w-full z-50 mb-2 bg-pri-50 shadow-md'>
      <div className='font-head text-5xl tracking-widest pt-4'>
        {children}
      </div>
    </div> */}
    {/* <div className='flex justify-center items-center h-40 w-full z-50 mb-6 shadow-lg bg-gradient-to-b from-pri-50 to-pri-50'>
      <div className='font-head text-5xl tracking-widest pt-4'>
        {children}
      </div>
    </div> */}
    </div>
  </>);
}

export default Header;