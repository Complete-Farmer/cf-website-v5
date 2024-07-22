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

export const mailChimpTags = {
  Home: 7931890,
  Buyer: 7931898,
  Grower: 7931902,
  Investor: 7931894,
  ExistingInvestor: 7933273,
  BuyerServiceGuide: 7933265,
  GrowerServiceGuide: 7931902,
  ProspectiveInvestor: 7933277,
};

export const maxRecordsPerPage = 10;

export const eventsConfig = {
  maxRecordsPerPage: 12,
};

export const blogsConfig = {
  maxRecordsPerPage: 6,
};

export const newsConfig = {
  maxRecordsPerPage: 6,
};

export const ENV = import.meta.env.PUBLIC_ENV;
export const FMS_API = import.meta.env.FMS_API;
export const BOT_PASS = import.meta.env.BOT_PASS;
export const BOT_EMAIL = import.meta.env.BOT_EMAIL;
export const AWS_REGION = import.meta.env.PUBLIC_AWS_REGION;
export const AWS_POOL_ID = import.meta.env.PUBLIC_AWS_POOL_ID;
export const AUTH_API = import.meta.env.PUBLIC_AUTH_API;
export const FACEBOOK_PIXEL_ID = import.meta.env.PUBLIC_FACEBOOK_PIXEL_ID;
export const PRISM_ACCESS_TOKEN = import.meta.env.PUBLIC_PRISM_ACCESS_TOKEN;
export const GOOGLE_MEASUREMENT_ID = import.meta.env.PUBLIC_GOOGLE_MEASUREMENT_ID;
export const GOOGLE_TAG_MANAGER_ID = import.meta.env
  .PUBLIC_GOOGLE_TAG_MANAGER_ID;
export const AWS_DOCUMENT_REPORT_BUCKETS = import.meta.env.AWS_DOCUMENT_REPORT_BUCKETS;
export const AGENT_RECRUITMENT_URL = import.meta.env.PUBLIC_AGENT_RECRUITMENT_URL;
