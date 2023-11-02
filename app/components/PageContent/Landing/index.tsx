
/*

  Image to be called in document as € [file]$[hero text]
  
  example:
    € click.webp?Welcome to my Church!

*/

// All components from LandingClient should be dynamically imported
import dynamic from 'next/dynamic'
const DynamicButton = dynamic(() => import('components/PageContent/Landing/LandingClient/Button'),{
  ssr: false,
});
const DynamicHelpers = dynamic(() => import('components/PageContent/Landing/LandingClient/Helpers'),{
  ssr: false,
});


const Landing: React.FC<{
  fileName: string,
  children: React.ReactNode,
}> = ({
  fileName,
  children,
}) => {
  return(<>
    <div id='Landing' className="absolute left-0 top-0 w-full h-full bg-ax1-400 bg-opacity-25 z-50" >
      <div className="flex-col h-full w-full flex items-center justify-center">
        <div className="text-7xl font-head mb-10">
          {children}
        </div>
        <DynamicButton/>
      </div>
    </div>
    <DynamicHelpers/>
  </>);
}

export default Landing;