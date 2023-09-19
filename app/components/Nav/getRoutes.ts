// 'use server'

// import type { InferGetStaticPropsType, GetStaticProps } from 'next'

// import { readdir, readFile } from 'fs/promises';
// import { writeFileSync } from 'fs';

// async function listDir(): Promise<string[]> {
//   try {
//     const files = await readdir('./app', { recursive: false });
//     return files;
//   } catch (err) {
//     console.error(err); // You might want to handle or log the error here.
//     return [] as string[]; // Return an empty array in case of an error.
//   }
// }

// export const getStaticProps = (async (context) => {
//   // console.log("getStaticProps");
//   // const routesObj = JSON.parse(`{
//   //   ${ 
//   //     (await listDir()).map((route) => {
//   //       `route : ${route}`
//   //     })
//   //   }
//   // }`);
//   // writeFileSync("routes.json", routesObj);
//   const routes = await listDir()
//     .then((r) => {
//       const string = r.map((route) => {
//         return `${route}\n`
//       }).toString();
//       return string;
//     })
//     .catch((err) => {
//       return "error"
//     });

//   writeFileSync("routes.json", routes);
// });

// export async function readRoutes(): Promise<string>{
//   return readFile("routes.json", {encoding: "utf8"});
// }


// // async function recursive(currDir: string): string[] {
// //   const files = await readdir('./app', { recursive: false, withFileTypes: true });
  
// //   const subDirs = files.filter((foo) => foo.isDirectory);
// //   subDirs.map((foo) => recursive(`./${foo}`))

// //   if(files.find((foo) => foo.name === 'page.tsx') !== undefined){
// //     routes.push(currDir);
// //   }
// //   return routes;
  
// //   //iterate subdirectories
// //     //routes.add(recursive(currSubDir));
// // }

// // var routes: string[] = [];
// // console.log(recursive('/'));