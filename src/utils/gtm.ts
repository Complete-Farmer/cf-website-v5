interface GTMProps {
  event: string;
  page: {
    title: string;
    url: string;
  };
  user?: {
    isLoggedIn: boolean;
  };
  ecommerce?: {
    currencyCode: string;
    products: any[];
  };
}

export const gtmVirtualPageView = (props: GTMProps) => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    ...props,
  });
};
