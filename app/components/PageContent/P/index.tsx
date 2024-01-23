const P: React.FC<{
   children: React.ReactNode,
}> = ({
   children,
}) => {
      return (<>
         <div className="P text-base text-justify leading-loose hyphens-auto max-w-text">
            {children}
         </div>
      </>);
   }

export default P;