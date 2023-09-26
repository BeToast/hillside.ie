const P: React.FC<{
  children: React.ReactNode,
}> = ({
  children,
}) => {
  return(<>
    <div className="text-base text-justify leading-relaxed hyphens-auto max-w-prose pb-1">
      {children}
    </div>
  </>);
}

export default P;