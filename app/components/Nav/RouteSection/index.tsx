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
      clickable={false}
    />
    <div>
    {route.subRoute.map(sub => (
      <SubRoute
        key={route.route}
        headRouteUrl={route.route}
        route={sub}
      />
    ))}
    </div>
  </>);
}

export default RouteSection;