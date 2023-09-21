// const routes = [
//   [ 'About' ],
//   [ 'About', 'Belief-Statement' ],
//   [ 'About', 'Community' ],
//   [ 'About', 'Constitution' ],
//   [ 'About', 'Greystones' ],
//   [ 'About', 'Teaching' ],
//   [ 'About', 'Worship' ],
//   [ 'Contact' ],
//   [ 'Events' ],
//   [ 'Events', 'Alpha' ],
//   [ 'Events', 'Events-Overview' ],
//   [ 'Events', 'Home-Groups' ],
//   [ 'Events', 'Kids-Sunday-Club' ],
//   [ 'Events', 'Prayer-&-Intercession' ],
//   [ 'Events', 'Womens-Bible-Study' ],
//   [ 'Events', 'Youth-Oxygen-Club' ],
//   [ 'home' ],
//   [ 'home', '$home' ],
//   [ 'home', '$howToFindUs' ],
//   [ 'home', '$newToFaith' ],
//   [ 'home', '$searchingForAnswersAboutGod' ],
//   //temp garbage
//   [ 'Test' ],
//   [ 'Test', 'Belief-Statement' ],
//   [ 'Test', 'Community' ],
//   [ 'Test', 'Constitution' ],
//   [ 'Test', 'Greystones' ],
//   [ 'Test', 'Teaching' ],
//   [ 'Test', 'Worship' ],
//   [ 'Test', 'Alpha' ],
//   [ 'Test', 'Events-Overview' ],
//   [ 'Test', 'Home-Groups' ],
//   [ 'Test', 'Kids-Sunday-Club' ],
//   [ 'Test', 'Prayer-&-Intercession' ],
//   [ 'Test', 'Womens-Bible-Study' ],
//   [ 'Test', 'Youth-Oxygen-Club' ],
// ]

export class Route {
  route: string;
  display: string;
  subRoute: Route[];

  constructor(
    route: string,
    subRoute: Route[] = [],
    display: string = route,
  ) {
    this.route = route;
    this.display = display;
    this.subRoute = subRoute;
  }
}

const routeArray: Route[] = [new Route('/', undefined, 'Home')] ;


const fillRouteArray = (slugs: Slug[]) => {

  // console.log(slugs);
  slugs.map((slug) => {
    const route = slug.slug;
    const existingRoute = routeArray.find((r) => r.route === route[0])
    if(existingRoute){
      if(route[1]){
        existingRoute.subRoute.push(new Route(route[1]))
      }
    }else{
      routeArray.push(
        new Route(route[0], (route[1] ? [new Route(route[1])] : undefined))
      )
      // var topRoute = new Route(route[0]) ;
      // if(route[1]){
      //   topRoute.subRoute.push(new Route(route[1]))
      // }
      // routeArray.push(topRoute);
    }
  })

  // routes.map((route) => {
  //   const existingRoute = routeArray.find((r) => r.route === route[0])
  //   if(existingRoute){
  //     if(route[1]){
  //       existingRoute.subRoute.push(new Route(route[1]))
  //     }
  //   }else{
  //     routeArray.push(
  //       new Route(route[0], (route[1] ? [new Route(route[1])] : undefined))
  //     )
  //     // var topRoute = new Route(route[0]) ;
  //     // if(route[1]){
  //     //   topRoute.subRoute.push(new Route(route[1]))
  //     // }
  //     // routeArray.push(topRoute);
  //   }
  // })
}


import { Slug } from "@/app/slugLyfe";
import RouteSection from "./RouteSection";

const Nav: React.FC<{
  slugs: Slug[],
}> = ({
  slugs,
}) => {
  fillRouteArray(slugs); //turn routes object, slugs, into instancianted array of Route objects...

  return(<>
      <div className="flex-col flex-nowrap p-8">
        {routeArray.map(route => (
          <RouteSection
            key={route.route}
            route={route}
          />
        ))}
      </div>
  </>);
}

export default Nav;


// 'use client'

// import useState, useEffect } from 'react';

// //for serverside use only
// import readRoutes } from './getRoutes';

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