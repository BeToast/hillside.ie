import LeftUnderline from "components/Underline/LeftUnderline";


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
    <div className="pl-4 py-2 truncate">
      <ActiveLinkStyle
        route={fullRoute}
      >
        <Link href={fullRoute}>
          <LeftUnderline>
            {route.display}
          </LeftUnderline>
        </Link>
      </ActiveLinkStyle>
    </div>

  </>);
}

export default SubRoute;