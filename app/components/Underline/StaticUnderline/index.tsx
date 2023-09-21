import './style.css';

const StaticUnderline: React.FC<{
  children: React.ReactNode,
}> = ({
  children,
}) => {
  return(<>
    <span className="static-underline">
      {children}
    </span>
  </>);
}

export default StaticUnderline;