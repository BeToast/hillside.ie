'use client'

import { useState, useEffect } from 'react';

//for serverside use only
import { listDir } from './getRoutes';
import { getRSCModuleInformation } from 'next/dist/build/analysis/get-page-static-info';

const Nav: React.FC<{
  
}> = ({
  
}) => {
  const [routes, setRoutes] = useState<string []>([] as string[]);

  useEffect(() => {
    async function getRoutes() {
      setRoutes(await listDir());
    }

    getRoutes();
  });

    return (<>
      <div className='p-4'>
        {routes === [] as string[] ? 
          <p>loading...</p>
        :
          routes.map((route: string) =>
            <p key={route}>{route}</p>
          )
        }
      </div>
    </>);
}

export default Nav;