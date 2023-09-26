import Script from "next/script";

import measurementId from "lib/googleAnalytics/measurementId";

export const GtagScriptInit: React.FC<{
  
}> = ({
  
}) => {
  return(<>
    <Script
      id="gtag-script"
      strategy="afterInteractive"
      src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
    />
    <Script
      id="gtag-innerHTMLset"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}', {
            page_path: window.location.pathname,
          });
        `,
      }}
    />
  </>);
}

export default GtagScriptInit