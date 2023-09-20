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

  // const boldRegex = new RegExp('/\*\*.*?\*\*/g') ;
  // const boldItalics = (line: string) => {
  //   const bolds = content.match(boldRegex) ;
  //     bolds?.map((match) => {
        
  //   })
  // }
  const boldItalics = (line: string): React.ReactNode => {
    return(<> 
      {line.split('**')
        .map((lin, index) => {
          const lout = lin.split('*')
            .map((li) => (index%2 ? <Italics>{li}</Italics> : <>{li}</>))
          return (index%2 ? <Bold>{lout}</Bold> : <>{lout}</>) ;
        })
      }
    </>);
  }
  

  content.split('\n').map(line => {
    if(line.slice(0,2) === '- '){
      const inner = line.slice(2);
      nodeArray.push(<>
        <Li>{boldItalics(inner)}</Li>
      </>);
    }else if(line.slice(0,2) === '# '){
      nodeArray.push(<>
        <H1>{boldItalics(line.slice(2))}</H1>
      </>);
    }else if(line.slice(0,3) === '## '){
      nodeArray.push(<>
        <H2>{boldItalics(line.slice(3))}</H2>
      </>);
    }else{
      nodeArray.push(<>
        <P>{boldItalics(line)}</P>
      </>);
    }
  })


  return nodeArray;
}