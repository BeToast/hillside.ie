const H2: React.FC<{
  children: React.ReactNode,
}> = ({
  children,
}) => {
  return(<>
    <h2 className="text-3xl">
      {children}
    </h2>
  </>);
}

export default H2;