import { getSlugs, getPage } from 'app/slugLyfe';
import type { Slug } from 'app/slugLyfe';



export default function Page({ params }: { params: Slug }){

  const { slug } = params ;
  // const slugString = `${params.slug}` ;

  return (
    <div>
      {getPage(slug)}
    </div>
  );
}


export function generateStaticParams(): Slug[] {
  return getSlugs();
}

// // export function generateStaticParams(): {slug: Slug, page: React.ReactNode}[] {
//   export function generateStaticParams(): { slug: Slug }[] {
//   const staticParams = getSlugs()
//     .map((slug: Slug) => {
//       return {
//         slug: slug,
//         // page: getPage(slug.slug)
//       };
//     })
//   console.log(staticParams);
//   return staticParams;
// }