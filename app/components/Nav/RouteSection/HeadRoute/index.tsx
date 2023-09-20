import Link from "next/link";
import { Route } from "../..";

const HeadRoute: React.FC<{
  route: Route,
}> = ({
  route,
}) => {
  return(<>
    
      <div className="">
        <Link href={route.route}>
          {route.display}
        </Link>
      </div>
    
  </>);
}

export default HeadRoute;