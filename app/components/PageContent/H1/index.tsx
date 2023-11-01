import Hr from "components/PageContent/Hr";

/*

  H1 to be called in document as # [Your heading text]?[showHrBeforeScroll]

  showHrBeforeScroll: boolean - defaults to true (for the case when image is directly under H1)
  
  example:
    # Community?false
    £ hillsidechurch.webp?center

*/

const H1: React.FC<{
  children: React.ReactNode,
  showHrBeforeScroll: string,
}> = ({
  children,
  showHrBeforeScroll,
}) => {
  return(<>
    <div className="H1 sticky top-0 font-head subpixel-antialiased text-6xl bg-inherit">
      <div className="pt-16 pb-12 px-4">
        {children}
      </div>
      <Hr showHrBeforeScroll={(showHrBeforeScroll === 'false' ? false : true)}/>
    </div>
  </>);
}

export default H1;