const Italics: React.FC<{
  children: React.ReactNode,
}> = ({
  children,
}) => {
  return(<>
    <span className="italic">{children}</span>
  </>);
}

export default Italics;