const H1: React.FC<{
  children: React.ReactNode,
}> = ({
  children,
}) => {
  return(<>
    <div className="sticky top-0 font-head subpixel-antialiased text-6xl py-14 bg-gray-200">
      {children}
    </div>
  </>);
}

export default H1;