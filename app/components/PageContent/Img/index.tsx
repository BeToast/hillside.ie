import Image from 'next/image'
import { El } from '../type';

/*

  Image to be called in document as £ [file]$[position]
  
  example:
    £ click.webp?right

*/

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
  //position input invalid input checker
  if(position !== 'center' && position !== 'right') {
    console.warn('The string is not "right" or "center" defaulting to "center"');
    position = 'center';
  }

  //img element
  const img: React.ReactElement = <>
    <img
      className='rounded-lg shadow-inner border border-grey-800'
      src={`/content/${slugPath+fileName}`}
      alt={fileName}
    />
  </>

  const getConditionalStyles = (previousEl: string, position: string): string => {
    var styles: string[] = [];

    //just previousEl
    if(previousEl === 'H1') styles.push('pt-0 mt-0')

    //just position
    if(position === 'center') styles.push('float-none')
    else if(position === 'right') styles.push('float-right pt-12 ml-8 pb-4')

    //combos
    // if(previousEl === 'H2' && position === 'right') styles.push('') 


    return styles.join(' ');
  }


  return (<>
    <div className={`Img px-4 ${getConditionalStyles(previousEl, position)}`}>
      {img}
    </div>
  </>);
}

export default Img;