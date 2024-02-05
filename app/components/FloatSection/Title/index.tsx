const Title: React.FC<{
   title: string,
   isDark: boolean,
}> = ({
   title,
   isDark,
}) => {
   const textColor = (isDark ? 'text-grey-800' : 'text-grey-100 z-10');
   // const zIndex = (isFront ? 'z-20' : 'z-0');

   return(<>
      <div className={`absolute pl-[3.8rem] -top-12 text-6xl font-head tracking-wider subpixel-antialiased ${textColor}`}>
         {title}
      </div>
      {isDark ? <></> : <span className="text-6xl font-head text-transparent">{title}</span>}
   </>);
}

export default Title;