import type { ITab } from "types/app";

import { HeroRight } from "@components/utils";
import HeroLeft from "./HeroLeft.tsx";

const Hero = ({ tabs, currentTab }: { tabs: ITab[]; currentTab: ITab }) => (
  <>
    <HeroLeft tabs={tabs} currentTab={currentTab} />
    <HeroRight
      key={currentTab.name}
      images={currentTab.images}
      className="hidden sm:flex"
    />
  </>
);

export default Hero;
