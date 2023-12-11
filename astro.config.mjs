/* @eslint-ignore */
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: "https://www.completefarmer.com",
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
            "snap.licdn.com"
          ];
          if (proxyDomains.includes(url.hostname)) {
            var proxyUrl = new URL("https://cdn.builder.io/api/v1/proxy-api");
            proxyUrl.searchParams.append("url", url.href);
            return proxyUrl;
          }
          return url;
        },
        forward: ["fbq", "dataLayer.push"],
      },
    }),
  ],
});
