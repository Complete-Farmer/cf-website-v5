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
          600: "#1D1D1F",
        },
        custom_black: { 900: "#1D1D1F" },
        custom_orange: { 500: "#E58C00" },
        custom_white: { 900: "#E5E5E5", 300: "#FFF7EB" },
      },
      backgroundSize: {
        widthscale: "cover contain",
        heightscale: "100% cover",
      },
      backgroundImage: {
        "hero-grower": "url('/src/assets/images/products/grower/hero-background.webp')",
        "hero-buyer": "url('/src/assets/images/products/buyer/hero-background.webp')",
        "footer-pattern": "url('/src/assets/images/home/footer-bg-patterns.webp')",
        "customer-stories-grower-bg-pattern": "url('/src/assets/images/products/grower/customer-stories-bg-pattern.webp')",
        "customer-stories-buyer-bg-pattern": "url('/src/assets/images/products/buyer/customer-stories-bg-pattern.webp')",
        "contact-us-bg": "url('/src/assets/images/contact-us/background-pattern.webp')",

        "about-us-pattern": "url('/src/assets/bg/motif-orange.svg')",
        "about-us-mobile-pattern":
          "url('/src/assets/bg/abous-us-mobile-pattern.svg')",
        "career-pattern": "url('/src/assets/bg/motif-red.svg')",
        "about-us-pattern-ceo": "url('/src/assets/bg/motif-green-solid.svg')",
        "cta-illustation": "url('/src/assets/bg/cta-illustation.svg')",
        "product-bg": "url('/src/assets/bg/product-bg.svg')",
        "footer-buyer-pattern": "url('/src/assets/bg/motif-blue.svg')",
        "buyer-sales-pattern": "url('/src/assets/bg/motif-blue.svg')",
        "grower-intrested-in-pattern": "url('/src/assets/bg/grower-intrested.svg')",
        "grower-intrested-in-pattern-mobile":
          "url('/src/assets/bg/grower-intrested-mobile.svg')",
        "grower-intrested-in-pattern-tab":
          "url('/src/assets/bg/grower-intrested-tab.svg')",
        "grower-intrested-agent-pattern":
          "url('/src/assets/bg/grower-intrested-agent.svg')",
        "grower-intrested-agent-pattern-mobile":
          "url('/src/assets/bg/grower-intrested-agent-mobile.svg')",
        "grower-intrested-agent-pattern-tab":
          "url('/src/assets/bg/grower-intrested-agent-tab.svg')",
        "operational-locations":
          "url('/src/assets/bg/bg-operational-locations.svg')",
        "grower-thefarmmanager": "url('/src/assets/bg/grower-thefarmmanager.svg')",
        "grower-thefarmmanager-mobile":
          "url('/src/assets/bg/grower-thefarmmanager-mobile.svg')",
        "grower-thefarmmanager-tab":
          "url('/src/assets/bg/grower-thefarmmanager-tab.svg')",
      },
    },
    fontFamily: { cera: ["Cera Pro", "sans-serif"] },
  },
  plugins: [tailwindForm, tailwindAR],
};
