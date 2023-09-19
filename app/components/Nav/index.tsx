// 'use client'

// import { useState, useEffect } from 'react';

// //for serverside use only
// import { readRoutes } from './getRoutes';

// const Nav: React.FC<{
  
// }> = ({
  
// }) => {
//   const [routes, setRoutes] = useState<string []>([] as string[]);

//   useEffect(() => {
//     async function getRoutes() {
//       readRoutes()
//         .then((r) => {
//           setRoutes([r]);
//       })
//         .catch((err) => {
//           console.log(err);
//       });
//     }

//     getRoutes();
//   });

//     return (<>
//       <div className='p-4'>
//         {routes === [] as string[] ? 
//           <p>loading...</p>
//         :
//           routes.map((route: string) =>
//             <p key={route}>{route}</p>
//           )
//         }
//       </div>
//     </>);
// }

// export default Nav;