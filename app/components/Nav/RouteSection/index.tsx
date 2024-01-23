import { Route } from '..';
import HeadRoute from './HeadRoute';
import SubRoute from './SubRoute';

const RouteSection: React.FC<{
   route: Route;
}> = ({
   route,
}) => {
      return (<>
         <div className='group/section pt-4'>
            <HeadRoute
               route={route}
               clickable={false}
            />
            {/* group/subroutes currently unused */}
            <div className='group/subroutes'>
               {route.subRoute.map(sub => (
                  <SubRoute
                     key={route.route}
                     headRouteUrl={route.route}
                     route={sub}
                  />
               ))}
            </div>
         </div>
      </>);
   }

export default RouteSection;