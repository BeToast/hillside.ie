import './style.css';

const componame: React.FC<{
   className?: string,
   children: React.ReactNode,
}> = ({
   className = '',
   children,
}) => {
   return(<>
      <div className={`${className}+ block pl-64`}>
         {children}
      </div>
   </>);
}

export default componame;