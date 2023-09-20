const P: React.FC<{
  children: React.ReactNode,
}> = ({
  children,
}) => {
  return(<>
    <p className="text-base">
      {children}
    </p>
  </>);
}

export default P;