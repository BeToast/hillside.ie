import genPage from './genPage';

const PageContent: React.FC<{
  fullPath: string,
}> = ({
  fullPath,
}) => {
  return(<>
    {genPage(fullPath)}
  </>);
}

export default PageContent;