interface GTMProps {
  event: string;
  [key: string]: any;
}

export const gtmVirtualPageView = (props: GTMProps) => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    ...props,
  });
};
