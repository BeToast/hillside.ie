import { readFileSync } from 'fs';
import H1 from './H1';
import H2 from './H2';
import Li from './Li';
import P from './P';
import Italics from './Italics';
import Bold from './Bold';


export default function genPage(fullPath: string): React.ReactNode {
  const horzLine = <>
    <div className='w-[1px] bg-grey-300'/>
  </>

  return (<>

    <div className='lg:w-lg 2xl:mx-10 bg-grey-100' >

      <div className='flex flex-row flex-nowrap bg-inherit'>
        {horzLine}
        <div className='w-full px-24 space-y-1 pb-16 bg-inherit'>
          {parseContent(fullPath)}
        </div>
        {horzLine}
      </div>

    </div>
  </>);
}


function parseContent(fullPath: string): React.ReactNode {
  const nodeArray: React.ReactNode[] = [] ;
  var currliKey: number = 0;

  // var wasLi = false ;

  const content = readFileSync(fullPath, 'utf-8') ;

  //return bold and italicized line
  const boldItalics = (line: string): React.ReactNode => {
    return(<> 
      {line.split('**') //split string for bold
        .map((lineBoldSplit, indexBold) => {
          const italicsOut = lineBoldSplit.split('*') //split string for italics
            .map((l, indexItalics) => {return (indexItalics%2 ? <Italics>{l}</Italics> : <>{l}</>)}) //italicize if odd index
          return (indexBold%2 ? <Bold>{italicsOut}</Bold> : <>{italicsOut}</>) ; //bold if odd index
        })
      }
    </>);
  }

  content.split('\n').map(line => {

    line = line.trim();

    const twoChars = line.slice(0,2) ;
    const remainderChars = (l: string, i?: number) => l.slice((i ? i : 2)) ;
    if(twoChars === '- '){ //if li
      nodeArray.push(<>
        <Li key={currliKey}>{boldItalics(remainderChars(line))}</Li>
      </>);
      currliKey++;
    }else if(twoChars === '# '){ //if h1
      nodeArray.push(<>
        <H1>{boldItalics(remainderChars(line))}</H1>
      </>);
    }else if(line.slice(0,3) === '## '){ //if h2
      nodeArray.push(<>
        <H2>{boldItalics(remainderChars(line, 3))}</H2>
      </>);
    }else if(line !== ''){ //if p
      nodeArray.push(<>
        <P>{boldItalics(line)}</P>
      </>);
    }
  })


  return nodeArray;
}