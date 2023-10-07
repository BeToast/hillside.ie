export default function Layout({
  children,
}: {
  children: React.ReactNode,
}) {

  const horzLine = <>
    <div className='w-[1px] bg-grey-300'/>
  </>

  return (<>
    <div className='lg:w-lg bg-grey-100 min-h-screen' >

      <div className='flex flex-row flex-nowrap bg-inherit '>
        {horzLine}
        <div className='w-full px-24 space-y-1 pb-16 bg-inherit'>
          {children}
        </div>
        {horzLine}
      </div>

    </div>
  </>);
}