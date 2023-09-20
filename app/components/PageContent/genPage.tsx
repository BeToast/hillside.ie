// import { readdir, readFile } from 'fs/promises';
import { readdirSync, readFileSync } from 'fs';
import H1 from './H1';
import H2 from './H2';
import Li from './Li';
import P from './P';
import Italics from './Italics';
import Bold from './Bold';


export default function genPage(fullPath: string): React.ReactNode {
  return (<>
    <div className='p-12 space-y-1'>
      {parseContent(fullPath)}
    </div>
  </>);
}


function parseContent(fullPath: string): React.ReactNode {
  const nodeArray: React.ReactNode[] = [] ;

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
    const twoChars = line.slice(0,2) ;
    const remainderChars = (l: string, i?: number) => l.slice((i ? i : 2)) ;
    if(twoChars === '- '){ //if li
      nodeArray.push(<>
        <Li>{boldItalics(remainderChars(line))}</Li>
      </>);
    }else if(twoChars === '# '){ //if h1
      nodeArray.push(<>
        <H1>{boldItalics(remainderChars(line))}</H1>
      </>);
    }else if(line.slice(0,3) === '## '){ //if h2
      nodeArray.push(<>
        <H2>{boldItalics(remainderChars(line, 3))}</H2>
      </>);
    }else{ //if p
      nodeArray.push(<>
        <P>{boldItalics(line)}</P>
      </>);
    }
  })


  return nodeArray;
}