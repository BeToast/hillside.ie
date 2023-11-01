const Hr: React.FC<{
  className?: string,
}> = ({
  className = '',
}) => {
  return(<>
    <div className={className +" h-[1px] bg-grey-800 rounded-lg mx-4"} />
  </>);
}
export default Hr;