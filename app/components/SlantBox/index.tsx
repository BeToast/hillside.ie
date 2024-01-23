import './styles.css'

const SlantBox: React.FC<{
   children: React.ReactNode,
}> = ({
   children,
}) => {
   return(<>
      <div className="slantbox">
         <div className='lg:pl-64'>
            {children}
         </div>
      </div>
   </>);
}

export default SlantBox;