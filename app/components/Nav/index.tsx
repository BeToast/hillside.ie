import { Slug, getSlugs } from "helpers/slugLyfe";
import RouteSection from "./RouteSection";
import { routeKeys } from "./static";

const keyHelper = (str: string): string => {
   const key = routeKeys.get(str);
   return (key ? `${key}` : str);
}


export class Route {
   route: string;
   display: string;
   subRoute: Route[];
   key: string;

   constructor(
      route: string,
      subRoute: Route[] = [],
      display: string = route,
      key?: string,
   ) {
      this.route = route;
      this.display = display;
      this.subRoute = subRoute;
      this.key = keyHelper(route);
   }
}


const fillRouteArray = (slugs: Slug[]) => {
   //iterate through all slugs
   slugs.map((slug) => {
      //route is the array of string
      const route = slug.slug;
      //top route is already added to nav?
      const existingRoute = routeArray.find((r) => r.route === route[0])
      if (existingRoute) {
         //add the subroute if one exists
         if (route[1]) {
            existingRoute.subRoute.push(new Route(route[1]))
         }
      } else {
         //add top route and subroute if avilable
         routeArray.push(
            new Route(route[0], (route[1] ? [new Route(route[1])] : undefined))
         )
      }
   })
}

const routeArray: Route[] = [];
fillRouteArray(getSlugs(false)); //turn routes object, slugs, into instancianted array of Route objects...

const Nav: React.FC<{

}> = ({

}) => {
      return (<>
         <div className="flex-col flex-nowrap p-8">
            {routeArray.sort((a, b) => a.key.localeCompare(b.key)).map(route => (
               <RouteSection
                  key={route.key}
                  route={route}
               />
            ))}
         </div>
      </>);
   }

export default Nav;