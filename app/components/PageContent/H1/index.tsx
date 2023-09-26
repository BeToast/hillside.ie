const H1: React.FC<{
  children: React.ReactNode,
}> = ({
  children,
}) => {
  return(<>
    <p className="text-6xl pb-16">
      {children}
    </p>
  </>);
}

export default H1;