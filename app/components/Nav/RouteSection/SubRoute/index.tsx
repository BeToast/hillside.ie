import './style.css';

import ActiveLinkStyle from "../ActiveLinkStyle";
import { Route } from "../..";

import Link from "next/link";

const SubRoute: React.FC<{
  headRouteUrl: string,
  route: Route,
}> = ({
  headRouteUrl,
  route,
}) => {
  const fullRoute = `/${headRouteUrl}/${route.route}` ;

  return(<>
    <Link href={fullRoute}>
      <div className="rounded-xl mb-[1px] text-grey-800 hover:text-grey-900 hover:bg-grey-100 active:bg-grey-300 active:text-grey-950 ">
        <ActiveLinkStyle
          route={fullRoute}
        >
          <div className="px-4 py-2 truncate">
            
            {route.display}
          </div>
        </ActiveLinkStyle>
      </div>
    </Link>
  </>);
}

export default SubRoute;