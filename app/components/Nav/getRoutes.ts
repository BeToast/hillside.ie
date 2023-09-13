'use server'

import { readdir } from 'fs/promises';

export async function listDir(): Promise<string[]> {
  try {
    const files = await readdir('./app', { recursive: false });
    return files;
  } catch (err) {
    console.error(err); // You might want to handle or log the error here.
    return [] as string[]; // Return an empty array in case of an error.
  }
}


// async function recursive(currDir: string): string[] {
//   const files = await readdir('./app', { recursive: false, withFileTypes: true });
  
//   const subDirs = files.filter((foo) => foo.isDirectory);
//   subDirs.map((foo) => recursive(`./${foo}`))

//   if(files.find((foo) => foo.name === 'page.tsx') !== undefined){
//     routes.push(currDir);
//   }
//   return routes;
  
//   //iterate subdirectories
//     //routes.add(recursive(currSubDir));
// }

// var routes: string[] = [];
// console.log(recursive('/'));