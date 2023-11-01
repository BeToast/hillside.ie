import Hr from "components/PageContent/Hr";

/*

  H1 to be called in document as # [Your heading text]?[hideHrAtTop]

  hideHrAtTop: boolean - defaults to false (for the case when image is directly under H1)
  
  example:
    # Community?true
    £ hillsidechurch.webp?center

*/

const H1: React.FC<{
  children: React.ReactNode,
  hideHrAtTop: string,
}> = ({
  children,
  hideHrAtTop,
}) => {
  return(<>
    <div className="H1 sticky top-0 font-head subpixel-antialiased text-6xl bg-inherit">
      <div className="pt-16 pb-12 px-4">
        {children}
      </div>
      <Hr hideHrAtTop={(hideHrAtTop === 'true' ? true : false)}/>
    </div>
  </>);
}

export default H1;