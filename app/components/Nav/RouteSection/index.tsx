import { Route } from '..';
import HeadRoute from './HeadRoute';
import SubRoute from './SubRoute';

const RouteSection: React.FC<{
  route: Route;
}> = ({
  route,
}) => {
  return(<>
    <div className="flex-col flex-nowrap">
      <HeadRoute 
        route={route}
      />
      {route.subRoute.map(sub => (
        <SubRoute
          route={sub}
        />
      ))}
    </div>
  </>);
}

export default RouteSection;