import './style.css';

const componame: React.FC<{
   className?: string,
   children: React.ReactNode,
}> = ({
   className = '',
   children,
}) => {
   return(<>
      <div className={`${className}`}>
         {children}
      </div>
   </>);
}

export default componame;