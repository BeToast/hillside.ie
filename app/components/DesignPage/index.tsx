import './styles.css'

import FloatSection from '../FloatSection';
import SlantBox from '../SlantBox';

import {title, body} from './static'


const DesignPage: React.FC<{
   
}> = ({
   
}) => {
   return(<>
      <div className="">
         <div className="lg:pl-64 pt-24">
            <FloatSection 
               title={title}
               body={body}
            />
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