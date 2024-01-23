import Link from "next/link";

import { Route } from "../..";
import StaticUnderline from "components/Underline/StaticUnderline";

const HeadRoute: React.FC<{
   route: Route,
   clickable?: boolean,
}> = ({
   route,
   clickable = true,
}) => {

      return (<>
         {/* TODO: create greater visual indicator than text change */}
         <div className="transition-colors font-semibold text-grey-600 group-hover/section:text-grey-900 pl-1 pt-3 pb-2 first:pt-0 truncate">
            {(clickable
               ?
               <Link
                  className=""
                  href={'/' + route.route}
               >
                  {/* <StaticUnderline>{route.display}</StaticUnderline> */}
                  {route.display}
               </Link>
               :
               // <StaticUnderline>{route.display}</StaticUnderline>
               <>{route.display}</>
            )}
         </div>

      </>);
   }

export default HeadRoute;