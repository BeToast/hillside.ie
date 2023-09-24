import { Slug, getSlugs } from "helpers/slugLyfe";
import RouteSection from "./RouteSection";


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
    }
  })
}


const routeArray: Route[] = [new Route('/', undefined, 'Home')] ;
fillRouteArray(getSlugs()); //turn routes object, slugs, into instancianted array of Route objects...


const Nav: React.FC<{

}> = ({

}) => {
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