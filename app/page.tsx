
// scroll  handler
// import dynamic from 'next/dynamic'
// const DynamicScrollHandler = dynamic(() => import('components/ScrollHandler'),{
//   ssr: false,
// });

export default function Template() {
  const mainId = "home";

  return (<>
    <main id={mainId} className=''>
      {/* <PageContent slug={['home']}/> */}
      
    </main>
    

    {/* <DynamicScrollHandler mainId={mainId}/> */}
  </>)
}
