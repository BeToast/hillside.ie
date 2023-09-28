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
    <div className={`${(currentRoute === route ? 'bg-red-50' : '')}`}>
      {children}
    </div>
  </>);
}

export default ActiveLinkStyle;