import { hideHrAtTopClass } from "./static";

const Hr: React.FC<{
  className?: string,
  hideHrAtTop?: boolean,
}> = ({
  className = '',
  hideHrAtTop = false,
}) => {

  return(<>
    <div className={`Hr ${className} h-[1px] rounded-lg mx-4 ${(hideHrAtTop ? `${hideHrAtTopClass} bg-transparent` : 'bg-grey-800')}`} />
  </>);
}
export default Hr;