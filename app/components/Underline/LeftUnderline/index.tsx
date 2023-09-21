import './style.css'

const LeftUnderline: React.FC<{
  children: React.ReactNode,
}> = ({
  children,
}) => {
  return(<>
    <span className="left-underline">
      {children}
    </span>
  </>);
}

export default LeftUnderline;