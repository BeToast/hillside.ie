const H2: React.FC<{
  children: React.ReactNode,
}> = ({
  children,
}) => {
  return(<>
    <p className="text-3xl pt-6 pb-3 max-w-text tracking-normal leading-tight">
      {children}
    </p>
  </>);
}

export default H2;