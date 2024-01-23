import SlantBox from '../SlantBox';
import './styles.css'

const DesignPage: React.FC<{
   
}> = ({
   
}) => {
   return(<>
      <div className="h-[600px]">
         <div className="lg:pl-64 pt-8">
            Here is some main content
         </div>
      </div>
      <SlantBox>
         children
      </SlantBox>
      <div className="h-[600px]">
         <div className="lg:pl-64 pt-8">
            Here is more content
         </div>
      </div>
   </>);
}

export default DesignPage;