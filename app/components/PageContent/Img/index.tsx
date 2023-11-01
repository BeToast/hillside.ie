import Image from 'next/image'
import { El } from '../type';

const Img: React.FC<{
  slugPath: string,
  fileName: string,
  position: string, //'center' | 'right',
  previousEl: El,
}> = ({
  slugPath,
  fileName,
  position,
  previousEl,
}) => {

  //img element
  const img: React.ReactElement = <>
    <img
      className='rounded-2xl shadow-inner border border-grey-500'
      src={`/content/${slugPath+fileName}`}
      alt={fileName}
    />
  </>


  //make sure position is center or right
  if(position !== 'center' && position !== 'right') {
    console.warn('The string is not "right" or "center" defaulting to "center"');
    position = 'center';
  }
  if(position === 'center'){ //if center
    return <>
      <div className='Img float-none pt-8 pb-6 px-4'>
        {img}
      </div>
    </>
  }else if(position === 'right'){ //if right
    return <>
      <div className='Img float-right ml-8 pb-8 pt-12 '>
        {img}
      </div>
    </>
  }
}

export default Img;