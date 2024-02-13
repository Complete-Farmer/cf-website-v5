/** @type {import('tailwindcss').Config} */

import tailwindForm from "@tailwindcss/forms";
import tailwindAR from "@tailwindcss/aspect-ratio";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      width: { inherit: "inherit" },
      divideOpacity: { 3: "0.03" },
      colors: {
        buyer: {
          100: "#EBF0FF",
          200: "#",
          300: "#",
          400: "#253A66",
          500: "#367AFE",
          600: "#18274C",
          700: "#253A66",
          800: "#102352",
          900: "#00194C"
        },
        grower: {
          100: "#D8F5D7",
          200: "#EBFFEB",
          300: "#ADE4AB",
          400: "#004C46",
          500: "#31BC2E",
          800: "#00524B",
          900: "#022D2B",
        },
        custom_gray: {
          200: "#EFEFEF",
          300: "#6C6C6C",
          400: "#F6F6F6",
        },
        custom_black: { 900: "#1D1D1F" },
        custom_orange: { 200: "#FFF3E0", 500: "#E58C00" },
        custom_white: { 900: "#E5E5E5", 300: "#FFF7EB" },
      },
      backgroundSize: {
        widthscale: "cover contain",
        heightscale: "100% cover",
      },
      backgroundImage: {
        "products": "url('/src/assets/images/products/products-bg.webp')",
        "about-us-ceo": "url('/src/assets/images/about-us/ceo-bg-pattern.webp')",
        "about-us-hero": "url('/src/assets/images/about-us/hero-background.png')",
        "investor-relations": "url('/src/assets/images/investor-relations/hero-bg.webp')",
        "footer-pattern": "url('/src/assets/images/home/footer-bg-patterns.webp')",
        "hero-buyer": "url('/src/assets/images/products/buyer/hero-background.webp')",
        "contact-us-bg": "url('/src/assets/images/contact-us/background-pattern.webp')",
        "hero-grower": "url('/src/assets/images/products/grower/hero-background.webp')",
        "interested-in-agent": "url('/src/assets/images/products/grower/interested-in-agent.webp')",
        "interested-in-agent-1": "url('/src/assets/images/products/grower/interested-in-agent-1.webp')",
        "operational-locations": "url('/src/assets/images/products/grower/agent/operational-locations.webp')",
        "farm-manager-academy": "url('/src/assets/images/products/grower/farm-manager-academy-desktop.webp')",
        "interested-in-agent-mobile": "url('/src/assets/images/products/grower/interested-in-agent-mobile.webp')",
        "interested-in-agent-tablet": "url('/src/assets/images/products/grower/interested-in-agent-tablet.webp')",
        "farm-manager-academy-tablet": "url('/src/assets/images/products/grower/farm-manager-academy-tablet.webp')",
        "farm-manager-academy-mobile": "url('/src/assets/images/products/grower/farm-manager-academy-mobile.webp')",
        "customer-stories-buyer-bg-pattern": "url('/src/assets/images/products/buyer/customer-stories-bg-pattern.webp')",
        "customer-stories-grower-bg-pattern": "url('/src/assets/images/products/grower/customer-stories-bg-pattern.webp')",
      },
    },
    fontFamily: { cera: ["Cera Pro", "sans-serif"] },
  },
  plugins: [tailwindForm, tailwindAR],
};
