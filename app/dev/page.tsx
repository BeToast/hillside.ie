import Nav from 'components/Nav';

// scroll  handler
// import dynamic from 'next/dynamic'
// const DynamicScrollHandler = dynamic(() => import('components/ScrollHandler'),{
//   ssr: false,
// });

export default function Template() {
  const mainId = "home";

  return (<>
    <main id={mainId} className='flex justify-center items-center'>
      <div className="border-2">
        <Nav/>
      </div>
    </main>
    

    {/* <DynamicScrollHandler mainId={mainId}/> */}
  </>)
}
