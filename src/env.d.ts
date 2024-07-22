/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly FMS_API: string;
  readonly BOT_PASS: string;
  readonly BOT_EMAIL: string;
  readonly PUBLIC_AUTH_API: string;
  readonly PUBLIC_AWS_REGION: string;
  readonly PUBLIC_AWS_POOL_ID: string;
  readonly PUBLIC_ENV: "DEV" | "PROD";
  readonly PUBLIC_FACEBOOK_PIXEL_ID: string;
  readonly PUBLIC_PRISM_ACCESS_TOKEN: string;
  readonly PUBLIC_GOOGLE_MEASUREMENT_ID: string;
  readonly PUBLIC_PRISMIC_ACCESS_TOKEN: string;
  readonly AWS_DOCUMENT_REPORT_BUCKETS: string;
  readonly PUBLIC_GOOGLE_TAG_MANAGER_ID: string;
  readonly PUBLIC_AGENT_RECRUITMENT_URL: string;
  // more env variables...
}

declare module "*.astro" {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function Component (_props: Record<string, any>): any
  export default Component;
}