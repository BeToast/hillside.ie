import { getSlugs, getPage } from 'app/slugLyfe';
import type { Slug } from 'app/slugLyfe';



export default function Page({ params }: { params: Slug }){

  const { slug } = params ;
  const slugString = `${params.slug}` ;

  return (
    <div>
      <h1>{slugString}</h1>
      {getPage(slug)}
    </div>
  );
}


export function generateStaticParams(): Slug[] {
  return getSlugs();
}