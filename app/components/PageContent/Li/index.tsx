const Li: React.FC<{
  children: React.ReactNode,
}> = ({
  children,
}) => {
  return(<>
    <li>
      {children}
    </li>
  </>);
}

export default Li;