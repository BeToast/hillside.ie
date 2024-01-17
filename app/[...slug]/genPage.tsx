import { readFileSync } from 'fs';
import H1 from 'components/PageContent/H1';
import H2 from 'components/PageContent/H2';
import Li from 'components/PageContent/Li';
import P from 'components/PageContent/P';
import Italics from 'components/PageContent/Italics';
import Bold from 'components/PageContent/Bold';
import Img from 'components/PageContent/Img';
// import { El } from 'components/PageContent/type';
import Block from 'components/PageContent/Block';
import { getPreviousEl, setPreviousEl } from './helpers/previousEl';
import { getSlugPath, setSlugPath } from './helpers/slugPath';


export function genPage(fullPath: string, slugPath: string): React.ReactNode {
   setSlugPath(slugPath); //store in seperate ts file

   const content = readFileSync(fullPath, 'utf-8');
   const nodeArray: React.ReactNode[] = [];

   const lineArray: string[] = content.split('\n'); //get an array of strings representing each line in content.md

   for(var i = 0; i < lineArray.length; i++){ //for loop for length of lineArray
      let line = lineArray[i].trim(); //get current line and trim

      const twoChars = line.slice(0, 2);  // get both 2 and 3 chars
      const threeChars = line.slice(0, 3);// ik both wont be used which is inneficient :/ 
                                          //nbut its quite readable and this is run at build anyways...

      if (twoChars === '# ') {
         const headLineSplit = remainderChars(line).split('?');
         nodeArray.push(<>
            <Block>
               <H1 key={i} hideHrAtTop={headLineSplit[1]}>{boldItalics(headLineSplit[0])}</H1>
            </Block>
         </>);
         // previousEl = 'H1';
      }
      else if (threeChars === '## ') {
         const returnNode = (<>
            <Block>
               <H2 key={i}>{boldItalics(remainderChars(line, 3))}</H2>
               {getBlockContent(lineArray, i)}
            </Block>
         </>);
         // previousEl = 'H2';
         return(returnNode);
      }
   }


   return nodeArray;

   
}

const getBlockContent = (lineArray: string[], i: number): React.ReactNode => {
   i++; //increment because it has not been incremented yet in parent function.
   const nodeArray: React.ReactNode[] = [];

   for(;;){
      const line = lineArray[i].trim();
      const twoChars = line.slice(0, 2);
      const threeChars = line.slice(0, 3);

      if(threeChars === '## '){ //check if block should end
         i--; //decrement i so we read same line again in parent function.
         return nodeArray;
      }
      else
      {
         nodeArray.push(lineToNode(twoChars, line, i))
      }
   }
}

const lineToNode = (twoChars: string, line: string, lineKey: number): React.ReactNode => {
   //if  '- '  then <Li>
   if (twoChars === '- ') {
      const returnNode=(<>
         <Li key={lineKey}>{boldItalics(remainderChars(line))}</Li>
      </>);
      setPreviousEl('Li');
      return returnNode;
   }
   //if  '# '  then <H1>

   //if  '£ '  then <Img>
   else if (twoChars === '£ ') {
      const imgLineSplit = remainderChars(line).split('?');
      const returnNode = (<>
         <Img slugPath={getSlugPath()} fileName={imgLineSplit[0]} position={imgLineSplit[1]} previousEl={getPreviousEl()} key={lineKey} />
      </>);
      setPreviousEl('Img');
      return(returnNode);
   }
   //else its a <P> if line is not empty
   else if (line !== '') {
      const returnNode = (<>
         <P key={lineKey}>{boldItalics(line)}</P>
      </>);
      setPreviousEl('P');
      return returnNode;
   }
}


//////// GLOBAL HELPERS /////////

const remainderChars = (l: string, i?: number) => l.slice((i ? i : 2)); //remainder char function


const boldItalics = (line: string): React.ReactNode => {//return bold and italicized line
   //TODO: rewrite this unreadable madness and goto therapist
   return (<>
      {line.split('**').map((lineBoldSplit, indexBold) => { //split string for bold
         const italicsOut = lineBoldSplit.split('*') //split string for italics
            .map((l, indexItalics) => { return (indexItalics % 2 ? <Italics key={indexItalics}>{l}</Italics> : <span key={indexItalics}>{l}</span>) }) //italicize if odd index
         return (indexBold % 2 ? <Bold key={indexBold}>{italicsOut}</Bold> : <span key={indexBold}>{italicsOut}</span>); //bold if odd index
      })
      }
   </>);
}
