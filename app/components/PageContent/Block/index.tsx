const componame: React.FC<{
   children: React.ReactNode,
}> = ({
   children,
}) => {
   return(<>
      <div className="">
         {children}
      </div>
   </>);
}

export default componame;