import { arrayFromPath, getPage, getRoutes } from 'app/getContent';

type Slug = {
  slug: string[]
}


export default function Page({ params }: { params: Slug }){

  const slugString = `${params.slug}` ;

  return (
    <div>
      <h1>{slugString}</h1>
      {getPage(params.slug)}
    </div>
  );
}


export function generateStaticParams(): Slug[] {
  const params: Slug[] = [] ;
  getRoutes()
    .map((r) => {
      const tempSlug: Slug = { slug: arrayFromPath(r) } ;
      params.push(tempSlug) ;
    });
  // console.log(params) ;
  return params;
}