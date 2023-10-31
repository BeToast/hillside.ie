import { readdirSync } from 'fs';
import { arrayFromPath } from './pathHandler';
import contentPath from './staticPaths';

type Slug = {
  slug: string[]
}

const getSlugs = (): Slug[] => {
  const params: Slug[] = [] ;
  getRoutes()
    .forEach((r) => {
      const tempSlug: Slug = { slug: arrayFromPath(r) } ;
      params.push(tempSlug) ;
    });
  return params;
}

const getRoutes = (currDir?: string | null): string[] => {
  if(currDir === undefined) {
    currDir = null
  }
  const currDirRelative = () => (currDir ? currDir+'/' : '');

  var foundDirs: string[] = [] ;

  readdirSync(`${contentPath+currDirRelative()}`, { withFileTypes: true })
    .filter((foo) => foo.isDirectory())
      .map(dir => {
        foundDirs.push(currDirRelative() + dir.name);
        foundDirs = foundDirs.concat(getRoutes(currDirRelative() + dir.name));
      })
  return foundDirs;
}


export type { Slug };
export { getSlugs };