import P from "../PageContent/P";
import Title from "./Title";

const componame: React.FC<{
   title: string;
   body: string;
}> = ({
   title,
   body,
}) => {
   return(<>
      <div className="flex justify-center text-grey-100">
         <div className="bg-grey-800 relative rounded-sm">
            <Title title={title} isDark={true}/>
            <div className="relative overflow-clip">
               <Title title={title} isDark={false}/>
            </div>
            
            <div className="p-16">
               <P>
                  {body}
               </P>  
            </div>
         </div>
      </div>
   </>);
}

export default componame;