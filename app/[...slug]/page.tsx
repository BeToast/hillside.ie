import type { Slug } from 'helpers/slugLyfe';
import { getSlugs } from 'helpers/slugLyfe';
import { genPage } from './genPage';
import contentPath from 'helpers/staticPaths';
import { pathFromArray } from 'helpers/pathHandler';

export default function Page({ params }: { params: Slug }){
  return (<>
    { genPage(`${contentPath+pathFromArray(params.slug)}content.md`) }
  </>);
}


export function generateStaticParams(): Slug[] {
  return getSlugs();
}