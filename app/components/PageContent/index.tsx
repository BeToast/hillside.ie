import { pathFromArray } from 'helpers/pathHandler';
import contentPath from "helpers/staticPaths";
import genPage from './genPage';

const PageContent: React.FC<{
  slug: string[],
}> = ({
  slug,
}) => {
  return(<>
    {genPage(`${contentPath+pathFromArray(slug)}content.md`)}
  </>);
}

export default PageContent;