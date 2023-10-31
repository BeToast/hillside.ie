import { readFileSync } from 'fs';
import H1 from '../components/PageContent/H1';
import H2 from '../components/PageContent/H2';
import Li from '../components/PageContent/Li';
import P from '../components/PageContent/P';
import Italics from '../components/PageContent/Italics';
import Bold from '../components/PageContent/Bold';


export function genPage(fullPath: string): React.ReactNode {
  const nodeArray: React.ReactNode[] = [] ;

  const content = readFileSync(fullPath, 'utf-8') ;

  //return bold and italicized line
  const boldItalics = (line: string): React.ReactNode => {
    return(<> 
      {line.split('**') .map((lineBoldSplit, indexBold) => { //split string for bold
          const italicsOut = lineBoldSplit.split('*') //split string for italics
            .map((l, indexItalics) => {return (indexItalics%2 ? <Italics key={indexItalics}>{l}</Italics> : <span key={indexItalics}>{l}</span>)}) //italicize if odd index
          return (indexBold%2 ? <Bold key={indexBold}>{italicsOut}</Bold> : <span key={indexBold}>{italicsOut}</span>) ; //bold if odd index
        })
      }
    </>);
    // return line;
  }

  content.split('\n').map((line, indexLine) => {

    line = line.trim();

    const twoChars = line.slice(0,2) ;
    const remainderChars = (l: string, i?: number) => l.slice((i ? i : 2)) ;
    if(twoChars === '- '){ //if li
      nodeArray.push(<>
        <Li key={indexLine}>{boldItalics(remainderChars(line))}</Li>
      </>);
    }else if(twoChars === '# '){ //if h1
      nodeArray.push(<>
        <H1 key={indexLine}>{boldItalics(remainderChars(line))}</H1>
      </>);
    }else if(line.slice(0,3) === '## '){ //if h2
      nodeArray.push(<>
        <H2 key={indexLine}>{boldItalics(remainderChars(line, 3))}</H2>
      </>);
    }else if(line !== ''){ //if p
      nodeArray.push(<>
        <P key={indexLine}>{boldItalics(line)}</P>
      </>);
    }
  })

  return nodeArray;
}