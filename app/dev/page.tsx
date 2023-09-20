import Nav from 'components/Nav';

const Dev: React.FC<{
  
}> = ({
  
}) => {
  const mainId = "dev";

  return (<>
    <main id={mainId} className='flex justify-center items-center min-h-[50%]'>
      <Nav/>
    </main>
  </>)
}

export default Dev;