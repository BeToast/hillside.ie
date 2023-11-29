import { Dirent, readdirSync } from 'fs';
import { arrayFromPath } from './pathHandler';
// import { pathFromArray } from 'helpers/pathHandler';
import contentPath from './staticPaths';
import { ignoreDirs } from './ingoreDirs';

type Slug = {
   slug: string[]
}

const getSlugs = (onlyWithContentMd: boolean): Slug[] => {
   const params: Slug[] = [];
   getRoutes(onlyWithContentMd)
      .forEach((r) => {
         const tempSlug: Slug = { slug: arrayFromPath(r) };
         params.push(tempSlug);
      });

   return params;
}

const getRoutes = (onlyWithContentMd: boolean, currDir?: string | null): string[] => {
   if (currDir === undefined) {
      currDir = null
   }
   const currDirRelative = () => (currDir ? currDir + '/' : '');

   var foundDirs: string[] = [];

   readdirSync(`${contentPath + currDirRelative()}`, { withFileTypes: true })
      .filter((dirent) => isValidDir(dirent))
      // .filter((dirent) => dirent.isDirectory())
      .map(dir => {
         if(onlyWithContentMd){
            // get files in current directory
            const files = readdirSync(contentPath + currDirRelative() + dir.name);
            //check if current dir has content.md
            if(files.indexOf('content.md') > -1){
               //add to slugs to make a page from content.md
               foundDirs.push(currDirRelative() + dir.name);
            }
         } else {
            foundDirs.push(currDirRelative() + dir.name);
         }
         
         foundDirs = foundDirs.concat(getRoutes(onlyWithContentMd, currDirRelative() + dir.name));
      })


   return foundDirs;
}

//check if is a directory and name is not specified in ignoreDirs.ts
const isValidDir = (dirent: Dirent): boolean => {
    //is a directory?
   if(!dirent.isDirectory()) return false;

   //is dirname is in ingoreDirs?
   if(ignoreDirs.has(dirent.name)) return false

   //// check if any ignoreDir is in filepath ////
   //iterate through ignoreDirs
   ignoreDirs.forEach((ignoreDir) => { 
      //check if the ignoreDir is in filepath
      if(dirent.path.indexOf(ignoreDir) == -1) return false
   });

   
   return true; //default return is true
}


export type { Slug };
export { getSlugs };