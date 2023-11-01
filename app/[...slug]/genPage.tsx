import { readFileSync } from 'fs';
import H1 from '../components/PageContent/H1';
import H2 from '../components/PageContent/H2';
import Li from '../components/PageContent/Li';
import P from '../components/PageContent/P';
import Italics from '../components/PageContent/Italics';
import Bold from '../components/PageContent/Bold';
import Img from '../components/PageContent/Img';
import Hr from 'components/PageContent/Hr';
import { El } from '../components/PageContent/type';


export function genPage(fullPath: string, slugPath: string): React.ReactNode {
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

  var previousEl: El;

  content.split('\n').map((line, indexLine) => {

    line = line.trim();

    const twoChars = line.slice(0,2) ;
    const remainderChars = (l: string, i?: number) => l.slice((i ? i : 2)) ;
    if(twoChars === '- '){ //if li
      nodeArray.push(<>
        <Li key={indexLine}>{boldItalics(remainderChars(line))}</Li>
      </>);
      previousEl = 'Li';
    }else if(twoChars === '# '){ //if h1
      const headLineSplit = remainderChars(line).split('?');
      nodeArray.push(<>
        <H1 key={indexLine} showHrBeforeScroll={headLineSplit[1]}>{boldItalics(headLineSplit[0])}</H1>
      </>);
      previousEl = 'H1';
    }else if(twoChars === '£ '){ //if img
      const imgLineSplit = remainderChars(line).split('?');
      nodeArray.push(<>
        <Img slugPath={slugPath} fileName={imgLineSplit[0]} position={imgLineSplit[1]} previousEl={previousEl} key={indexLine}/>
      </>);
      previousEl = 'Img';
    }else if(line.slice(0,3) === '## '){ //if h2
      nodeArray.push(<>
        <H2 key={indexLine}>{boldItalics(remainderChars(line, 3))}</H2>
      </>);
      previousEl = 'H2';
    }else if(line !== ''){ //if p
      nodeArray.push(<>
        <P key={indexLine}>{boldItalics(line)}</P>
      </>);
      previousEl = 'P';
    }
  })

  return nodeArray;
}