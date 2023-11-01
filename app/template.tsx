
import { Suspense } from 'react';
import GtagRouteListener from 'components/Gtag/GtagRouteListener';


export default function Template({
  children,
}: {
  children: React.ReactNode
}) {
  return (<>
    {children}
    <Suspense fallback={null}>
      <GtagRouteListener />
    </Suspense>
  </>);
}