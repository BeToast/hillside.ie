import { readFileSync } from 'fs';

import H1 from 'components/PageContent/H1';
import H2 from 'components/PageContent/H2';
import Li from 'components/PageContent/Li';
import P from 'components/PageContent/P';
import Italics from 'components/PageContent/Italics';
import Bold from 'components/PageContent/Bold';
import Img from 'components/PageContent/Img';
import Block from 'components/PageContent/Block';

import { El } from 'components/PageContent/type';


//globals :/
//i think its better than passing them down through function calls in this case
var iG: number;
var slugPathGlobal: string;
var previousElGlobal: El;


export function genPage(fullPath: string, slugPath: string): React.ReactNode {
   slugPathGlobal = slugPath;

   const content = readFileSync(fullPath, 'utf-8');
   const nodeArray: React.ReactNode[] = [];

   const lineArray: string[] = content.split('\n'); //get an array of strings representing each line in content.md

   for(iG = 0; iG < lineArray.length; iG++){ //for loop for length of lineArray#

      let line = lineArray[iG].trim(); //get current line and trim

      const twoChars = line.slice(0, 2);  // get both 2 and 3 chars
      const threeChars = line.slice(0, 3);// ik both wont be used which is inneficient :/ 
                                          //nbut its quite readable and this is run at build anyways...

      if (twoChars === '# ') {
         const headLineSplit = remainderChars(line).split('?');
         nodeArray.push(<>
            {/* <Block className='sticky top-0 bg-inherit'>
               <H1 key={iG} hideHrAtTop={headLineSplit[1]}>{boldItalics(headLineSplit[0])}</H1>
            </Block> */}
         </>);
         previousElGlobal = 'H1';
      }
      else if (threeChars === '## ') {
         nodeArray.push(<>
            <Block>
               <H2 key={iG}>{boldItalics(remainderChars(line, 3))}</H2>
               {getBlockContent(lineArray)}
            </Block>
         </>);
         previousElGlobal = 'H2';
      }
      else if (twoChars === '£ ') {
         const imgLineSplit = remainderChars(line).split('?');
         nodeArray.push(<>
            <Img slugPath={slugPathGlobal} fileName={imgLineSplit[0]} position={imgLineSplit[1]} previousEl={previousElGlobal} key={iG} />
         </>);
         previousElGlobal = 'Img';
      }
      else if (line !== '') {
         throw console.warn(`\u001B[93m unprocessed line outside of block!\n  file: ${slugPath}\n  index: ${iG}\n`);
      }
   }
   return nodeArray;
}

const getBlockContent = (lineArray: string[]): React.ReactNode => {
   
   const nodeArray: React.ReactNode[] = [];

   for(iG++; iG < lineArray.length; iG++){ //loop forever
            //it has not been incremented yet in the parent function.

      if(lineArray[iG] === undefined){ break; } //break if end of file
      const line = lineArray[iG].trim(); //read line and trim whitespace
      if(line === '') { continue; } //continue if line empty

      const twoChars = line.slice(0, 2);
      const threeChars = line.slice(0, 3);

      if(threeChars === '## '){ //check if block should end
         iG--; //decrement i so we read same line again in parent function.
         break;
      }
      else
      {
         nodeArray.push(lineToNode(twoChars, line));
      }
   }
   return nodeArray;
}

const lineToNode = (twoChars: string, line: string): React.ReactNode => {
   //if  '- '  then <Li>
   if (twoChars === '- ') {
      const returnNode=(<>
         <Li key={iG}>{boldItalics(remainderChars(line))}</Li>
      </>);
      previousElGlobal = 'Li';
      return returnNode;
   }

   //if  '£ '  then <Img>
   else if (twoChars === '£ ') {
      const imgLineSplit = remainderChars(line).split('?');
      const returnNode = (<>
         <Img slugPath={slugPathGlobal} fileName={imgLineSplit[0]} position={imgLineSplit[1]} previousEl={previousElGlobal} key={iG} />
      </>);
      previousElGlobal = 'Img';
      return(returnNode);
   }
   //else its a <P> if line is not empty
   else if (line !== '') {
      const returnNode = (<>
         <P key={iG}>{boldItalics(line)}</P>
      </>);
      previousElGlobal = 'P';
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
