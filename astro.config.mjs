/* @eslint-ignore */
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  output: "static",
  build: {
    format: "directory",
    assets: "assets"
  },
  image: {
    domains: ["https://completefarmer.s3.us-east-2.amazonaws.com"],
  },
  site:  "https://www.completefarmer.com",
  redirects: {
    "/products/grower/": "/products/grower/new-farmer/",
    "/legal/": "/legal/terms-and-conditions"
  },
  integrations: [
    react({
      experimentalReactChildren: true,
    }),
    tailwind(),
    partytown({
      config: {
        resolveUrl: function (url) {
          const proxyDomains = [
            "connect.facebook.net",
            "www.google-analytics.com",
            "googleads.g.doubleclick.net",
            "www.googletagmanager.com",
            "snap.licdn.com"
          ];
          if (proxyDomains.includes(url.hostname)) {
            var proxyUrl = new URL("https://cdn.builder.io/api/v1/proxy-api");
            proxyUrl.searchParams.append("url", url.href);
            return proxyUrl;
          }
          return url;
        },
        forward: ["fbq", "dataLayer.push", "gtag"],
      },
    }),
  ],
});
