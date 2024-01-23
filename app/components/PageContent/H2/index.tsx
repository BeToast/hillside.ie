const H2: React.FC<{
   children: React.ReactNode,
}> = ({
   children,
}) => {
      return (<>
         <div className="w-full">
            {/* <p className="H2 text-3xl font-head pt-12 pb-4 px-4 max-w-text tracking-normal leading-tight"> */}
            <p className="H2 text-3xl font-head pt-12 pb-4 px-4 tracking-normal leading-tight">
               {children}
            </p>
         </div>
      </>);
   }

export default H2