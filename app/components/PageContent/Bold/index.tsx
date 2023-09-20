const Bold: React.FC<{
  children: React.ReactNode,
}> = ({
  children,
}) => {
  return(<>
    <span className="font-semibold">{children}</span>
  </>);
}

export default Bold;