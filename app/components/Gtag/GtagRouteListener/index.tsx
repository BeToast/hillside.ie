'use client'


import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from "react";

import * as gtag from "lib/googleAnalytics/helpers"


const GtagRouteListener: React.FC<{
  
}> = ({
  
}) => {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const url = `${pathname}?${searchParams}`
    gtag.pageview(url)
  }, [pathname, searchParams])

  return null;
}


export default GtagRouteListener;