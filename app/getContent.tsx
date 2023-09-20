
import { readdirSync } from 'fs';

import PageContent from 'components/PageContent';

const contentPath:string = './app/content/';


const getRoutes = (currDir?: string | null): string[] => {
  if(currDir === undefined) {
    currDir = null
  }
  const currDirRelative = () => (currDir ? currDir+'/' : '');

  var foundDirs: string[] = [] ;

  readdirSync(`${contentPath+currDirRelative()}`, { withFileTypes: true })
    .filter((foo) => foo.isDirectory())
      .map(dir => {
        foundDirs.push(currDirRelative() + dir.name);
        foundDirs = foundDirs.concat(getRoutes(currDirRelative() + dir.name));
      })

  return foundDirs;
}


const getPage = (slug: string[]) => {

  const fullPath = pathFromArray(slug)

  return (<>
    <PageContent fullPath={`${contentPath+fullPath}content.md`}/>
  </>)
}


const arrayFromPath = (path: string):string[] => {
  return path.split('/');
}
//format 'dir/subdir/'
const pathFromArray = (array: string[]):string => {
  return array.toString().replace(',', '/')+'/';
}



export { getPage, getRoutes, arrayFromPath };





// const getRoutes = (currDir: string | null): [string[]] => {

//   const arrayFromPath = (path: string):string[] => {
//     return path.split('/');
//   }

//   const contentPath:string = './app/content/';
//   const currDirRelative = () => (currDir ? currDir+'/' : '');

//   const foundDirs: [string[]] = [[]] ;

//   readdirSync(`${contentPath+currDirRelative()}`, { withFileTypes: true })
//     .filter((foo) => foo.isDirectory())
//       .map(dir => {
//         foundDirs.push(arrayFromPath(currDirRelative() + dir.name));
//         foundDirs.push(...(getRoutes(currDirRelative() + dir.name)));
//       })
//   foundDirs.shift(); //remove 0 index which is just []
//   return foundDirs;
// }





// const getSlug = (url: string): {s1: string, s2:string} => {
//   // console.log(route);
//   return {s1: 'big', s2: 'small' }
// }