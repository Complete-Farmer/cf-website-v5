export const productsLinks = [
  { name: "Grower", href: "/products/grower/new-farmer" },
  { name: "Buyer", href: "/products/buyer" },
];

export const companyLinks = [
  { name: "About us", href: "/about-us" },
  { name: "Careers", href: "/careers" },
  { name: "Investor relations", href: "/investor-relations" },
  { name: "Customer stories", href: "/customer-stories" },
  { name: "Resources", href: "/resources" },
  { name: "Newsroom", href: "/resources/news-room" },
  { name: "Blogs", href: "/resources/blogs" },
  { name: "Events", href: "/resources/events" },
  { name: "Contact us", href: "/contact-us", isMobile: true },
];

export const supportLinks = [{ name: "Contact us", href: "/contact-us" }];

export const legalLinks = [
  { name: " Privacy Policy", href: "/legal/privacy-policy" },
  { name: "Terms & Conditions", href: "/legal/terms-and-conditions" },
];

export const maxRecordsPerPage = 10;

export const eventsConfig = {
  maxRecordsPerPage: 9
};

export const blogsConfig = {
  maxRecordsPerPage: 6
};

export const newsConfig = {
  maxRecordsPerPage: 6
};

export const ENV = import.meta.env.PUBLIC_ENV;
export const FMS_API = import.meta.env.FMS_API;
export const BOT_PASS = import.meta.env.BOT_PASS;
export const BOT_EMAIL = import.meta.env.BOT_EMAIL;
export const AWS_REGION = import.meta.env.AWS_REGION;
export const AWS_POOL_ID = import.meta.env.AWS_POOL_ID;
export const FACEBOOK_PIXEL_ID = import.meta.env.PUBLIC_FACEBOOK_PIXEL_ID;
export const PRISM_ACCESS_TOKEN = import.meta.env.PUBLIC_PRISM_ACCESS_TOKEN;
export const GLOBAL_SITE_TAG_ID = import.meta.env.PUBLIC_GLOBAL_SITE_TAG_ID;
export const GOOGLE_TAG_MANAGER_ID = import.meta.env
  .PUBLIC_GOOGLE_TAG_MANAGER_ID;
export const AWS_DOCUMENT_REPORT_BUCKETS = import.meta.env
  .AWS_DOCUMENT_REPORT_BUCKETS;
