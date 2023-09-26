import measurementId from "./measurementId" ;

//remove ts error with windows.gtag
declare const window: {
  gtag: any;
} & Window;

export const pageview = (url: string) => {
  // console.log("pageview log fired");
  window.gtag("config", measurementId, {
    page_path: url,
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = (
  { action, category, label, value }
  :
  { action: string,
    category:string,
    label:string,
    value:number 
  }
) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};