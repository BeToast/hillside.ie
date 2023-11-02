import { readFileSync } from 'fs';
import H1 from 'components/PageContent/H1';
import H2 from 'components/PageContent/H2';
import Li from 'components/PageContent/Li';
import P from 'components/PageContent/P';
import Italics from 'components/PageContent/Italics';
import Bold from 'components/PageContent/Bold';
import Img from 'components/PageContent/Img';
import { El } from 'components/PageContent/type';
import Landing from 'components/PageContent/Landing';


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
    //if  '- '  then <Li>
    if(twoChars === '- '){
      nodeArray.push(<>
        <Li key={indexLine}>{boldItalics(remainderChars(line))}</Li>
      </>);
      previousEl = 'Li';
    }
    //if  '# '  then <H1>
    else if(twoChars === '# '){
      const headLineSplit = remainderChars(line).split('?');
      nodeArray.push(<>
        <H1 key={indexLine} hideHrAtTop={headLineSplit[1]}>{boldItalics(headLineSplit[0])}</H1>
      </>);
      previousEl = 'H1';
    }
    //if  '£ '  then <Img>
    else if(twoChars === '£ '){
      const imgLineSplit = remainderChars(line).split('?');
      nodeArray.push(<>
        <Img slugPath={slugPath} fileName={imgLineSplit[0]} position={imgLineSplit[1]} previousEl={previousEl} key={indexLine}/>
      </>);
      previousEl = 'Img';
    }
    //if  '€ '  then <Landing>
    else if(twoChars === '€ '){ 
      const landingLineSplit = remainderChars(line).split('?');
      nodeArray.push(<>
        <Landing fileName={landingLineSplit[0]} key={indexLine}>
          {landingLineSplit[1]}
        </Landing>
      </>);
      previousEl = 'Img';
    }
    //if  '## '  then <H2>
    else if(line.slice(0,3) === '## '){ 
      nodeArray.push(<>
        <H2 key={indexLine}>{boldItalics(remainderChars(line, 3))}</H2>
      </>);
      previousEl = 'H2';
    }
    //else its a <P> if line is not empty
    else if(line !== ''){ 
      nodeArray.push(<>
        <P key={indexLine}>{boldItalics(line)}</P>
      </>);
      previousEl = 'P';
    }
  })

  return nodeArray;
}