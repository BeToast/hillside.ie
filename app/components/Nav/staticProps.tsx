// 'use server'

// import type { InferGetStaticPropsType, GetStaticProps } from 'next'

// import { readdir } from 'fs/promises';



// export const getStaticProps = (async (context) => {
//   listDir()
//     .then((r) => {
//       return r;
//     })
//     .catch((err) => {
//       return [] as string[];
//     })
// }) satisfies GetStaticProps<{
//   routes: string[]
// }>




// async function listDir(): Promise<string[]> {
//   try {
//     const files = await readdir('./app', { recursive: false });
//     return files;
//   } catch (err) {
//     console.error(err); // You might want to handle or log the error here.
//     return [] as string[]; // Return an empty array in case of an error.
//   }
// }