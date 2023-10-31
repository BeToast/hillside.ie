import Image from 'next/image'

const Img: React.FC<{
  slugPath: string,
  fileName: string,
}> = ({
  slugPath,
  fileName,
}) => {

  return(<>
    <div className='float-right ml-8 pb-8 pt-12 '>
      <Image
        className='rounded-2xl shadow-inner border border-grey-500'
        src={`/content/${slugPath+fileName}`}
        alt={''} 
        width={146}
        height={621} 
      />
    </div>
  </>);
}

export default Img;