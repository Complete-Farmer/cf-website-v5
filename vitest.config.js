/// <reference types="vitest" />
import { getViteConfig } from "astro/config";

const config = {
  test: {
    /* for example, use global to avoid globals imports (describe, test, expect): */
    // globals: true,
  },
};

export default getViteConfig(config);