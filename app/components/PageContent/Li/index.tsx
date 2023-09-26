const Li: React.FC<{
  children: React.ReactNode,
}> = ({
  children,
}) => {
  return(<>
    <div className="flex items-start flex-nowrap py-3">
      <div className="w-1.5 h-1.5 rounded-full bg-black mr-2 mt-2.5"/>
      <div className="max-w-prose leading-relaxed">
        {children}
      </div>
    </div>
  </>);
}

export default Li;