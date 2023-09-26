import type { Slug } from 'helpers/slugLyfe';
import { getSlugs } from 'helpers/slugLyfe';

import PageContent from 'components/PageContent';

export default function Page({ params }: { params: Slug }){
  return (<>
    <PageContent slug={params.slug}/>
  </>);
}


export function generateStaticParams(): Slug[] {
  return getSlugs();
}