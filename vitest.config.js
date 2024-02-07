/// <reference types="vitest" />
import { getViteConfig } from "astro/config";
// import react from "@vitejs/plugin-react-swc";
import tailwindcss from "tailwindcss";

const config = {
  test: {
    /* for example, use global to avoid globals imports (describe, test, expect): */
    // globals: true,
  },
  plugins: [
    tailwindcss(),
  ],
};

export default getViteConfig(config);