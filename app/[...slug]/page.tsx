import type { Slug } from 'helpers/slugLyfe';
import { getSlugs } from 'helpers/slugLyfe';
import { genPage } from './genPage';
import contentPath from 'helpers/staticPaths';
import { pathFromArray } from 'helpers/pathHandler';


// scroll  handler
import dynamic from 'next/dynamic'
const DynamicScrollHandler = dynamic(() => import('components/ScrollHandler'), {
   ssr: false,
});


export default function Page({ params }: { params: Slug }) {
   const slugPath = pathFromArray(params.slug);
   const mainId = params.slug[params.slug.length - 1]; //get the leaf of the path for main id

   return (<>
      <main id={mainId} className='w-full px-20 pb-16 bg-inherit'>
         {genPage(`${contentPath + slugPath}content.md`, slugPath)}
      </main>
      <DynamicScrollHandler mainId={mainId} />
   </>);
}


export function generateStaticParams(): Slug[] {
   return getSlugs(true);
}