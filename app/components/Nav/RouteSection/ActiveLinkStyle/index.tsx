'use client'

import { usePathname } from 'next/navigation';


const ActiveLinkStyle: React.FC<{
  children: React.ReactNode,
  route: string,
}> = ({
  children,
  route,
}) => {
  {/* Get the current route */}
  const currentRoute = usePathname();

  return(<>
    <div className={`${(currentRoute === route ? 'bg-grey-100 shadow-sm text-grey-950' : '')} rounded-xl`}>
      {children}
    </div>
  </>);
}

export default ActiveLinkStyle;