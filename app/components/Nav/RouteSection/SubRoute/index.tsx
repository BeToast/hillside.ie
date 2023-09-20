import { Route } from "../..";
import Link from "next/link";

const SubRoute: React.FC<{
  route: Route,
}> = ({
  route,
}) => {
  return(<>

    <div className="pl-4">
      <Link href={route.route}>
        {route.display}
      </Link>
    </div>

  </>);
}

export default SubRoute;