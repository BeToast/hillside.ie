import Hr from "components/Hr";

const H1: React.FC<{
  children: React.ReactNode,
}> = ({
  children,
}) => {
  return(<>
    <div className="sticky top-0 font-head subpixel-antialiased text-6xl bg-inherit">
      <div className="pt-16 pb-12 px-4">
        {children}
      </div>
      <Hr/>
    </div>
  </>);
}

export default H1;