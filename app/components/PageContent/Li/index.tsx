const Li: React.FC<{
  children: React.ReactNode,
}> = ({
  children,
}) => {
  return(<>
    <div className="flex items-start flex-nowrap py-3 px-4">
      <div className="pr-2 pt-2">
        <div className="w-1.5 h-1.5 rounded-full bg-ax1-800" />
      </div>
      <div className="max-w-prose leading-relaxed">
        {children}
      </div>
    </div>
  </>);
}

export default Li;