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


  const isActive:boolean = currentRoute === route ;

  return(<>
    <div className={`${(isActive ? 'bg-grey-100 text-grey-950 border-b border-grey-300' : 'border-transparent')} rounded-xl border-b hover:border-grey-300`}>
      {children}
    </div>
  </>);
}

export default ActiveLinkStyle;