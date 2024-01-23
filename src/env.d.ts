/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly FMS_API: string;
  readonly BOT_PASS: string;
  readonly BOT_EMAIL: string;
  readonly PUBLIC_ENV: "DEV" | "PROD";
  readonly PUBLIC_BUYER_SERVICE: string;
  readonly PUBLIC_GROWER_SERVICE: string;
  readonly PUBLIC_VENDOR_SERVICE: string;
  readonly PUBLIC_FACEBOOK_PIXEL_ID: string;
  readonly PUBLIC_PRISM_ACCESS_TOKEN: string;
  readonly PUBLIC_GLOBAL_SITE_TAG_ID: string;
  readonly PUBLIC_PRISMIC_ACCESS_TOKEN: string;
  readonly PUBLIC_GOOGLE_TAG_MANAGER_ID: string;
  // more env variables...
}
