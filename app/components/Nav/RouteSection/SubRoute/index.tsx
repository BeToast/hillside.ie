import LeftUnderline from "components/Underline/LeftUnderline";
import { Route } from "../..";
import Link from "next/link";

const SubRoute: React.FC<{
  headRouteUrl: string,
  route: Route,
}> = ({
  headRouteUrl,
  route,
}) => {
  return(<>

    <div className="pl-4 py-2 truncate">
      <Link href={`/${headRouteUrl}/${route.route}`}>
        <LeftUnderline>
          {route.display}
        </LeftUnderline>
      </Link>
    </div>

  </>);
}

export default SubRoute;