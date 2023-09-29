const P: React.FC<{
  children: React.ReactNode,
}> = ({
  children,
}) => {
  return(<>
    <div className="text-base text-justify leading-loose hyphens-auto max-w-text pb-1">
      {children}
    </div>
  </>);
}

export default P;