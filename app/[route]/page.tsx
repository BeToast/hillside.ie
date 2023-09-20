import { arrayFromPath, getPage, getRoutes } from 'app/getContent';



export default function Page({ params }: { params: {route: string} }){

  const slug = params.route ;

  return (
    <div>
      <h1>{`Staticlly Generated Route ${slug}`}</h1>
    </div>
  );
}


export function generateStaticParams() {
  return [{route: 'one'}, {route: 'two'}, {route: 'three'}];
}
