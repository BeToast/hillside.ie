import Nav from 'components/Nav';

const Dev: React.FC<{
  
}> = ({
  
}) => {
  const mainId = "dev";

  return (<>
    <main id={mainId} className='flex min-h-[50%]'>
      <Nav/>
    </main>
  </>)
}

export default Dev;