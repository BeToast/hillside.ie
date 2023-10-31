export default function Layout({
  children,
}: {
  children: React.ReactNode,
}) {

  const vertLine = <>
    <div className='w-[1px] bg-grey-300'/>
  </>

  return (<>
    <div className='lg:w-lg bg-grey-100 min-h-screen' >

      <div className='flex flex-row flex-nowrap bg-inherit '>
        {vertLine}
        <div className='w-full px-20 space-y-1 pb-16 bg-inherit'>
          {children}
        </div>
        {vertLine}
      </div>

    </div>
  </>);
}