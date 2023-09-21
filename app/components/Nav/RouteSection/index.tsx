import { Route } from '..';
import HeadRoute from './HeadRoute';
import SubRoute from './SubRoute';

const RouteSection: React.FC<{
  route: Route;
}> = ({
  route,
}) => {
  return(<>
    <HeadRoute 
      route={route}
      clickable={true}
    />
    {route.subRoute.map(sub => (
      <SubRoute
        key={route.route}
        headRouteUrl={route.route}
        route={sub}
      />
    ))}
  </>);
}

export default RouteSection;