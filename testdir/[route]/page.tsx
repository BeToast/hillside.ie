import { arrayFromPath, getPage, getRoutes } from '@/app/slugLyfe';



export default function Page({ params }: { params: {route: string} }){

  const { route } = params ;
  console.log(getRoutes());

  return (
    <div>
      <h1>{`Staticlly Generated Route ${route}`}</h1>
    </div>
  );
}

export function generateStaticParams() {
  return [{route: 'one'}, {route: 'two'}, {route: 'three'}];
}

