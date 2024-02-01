import type { ITab } from "types/app";

import { HeroRight } from "@components/utils";
import HeroLeft from "./HeroLeft.tsx";

const Hero = ({ tabs, currentTab }: { tabs: ITab[]; currentTab: ITab }) => (
  <section className="w-full px-6 sm:px-4 text-white pb-20 sm:pb-48 xl:pb-32 bg-cover bg-hero-grower">
    <div className="w-full h-auto pt-14 sm:pt-20 xl:pt-32">
      <div className="max-w-7xl mx-auto sm:px-4 xl:px-0 flex items-center flex-col sm:flex-row h-full">
        <HeroLeft tabs={tabs} currentTab={currentTab} />
        <HeroRight
          key={currentTab.name}
          imageSrc={currentTab.rightImage.src}
          className="hidden sm:flex sm:w-1/2"
        />
      </div>
    </div>
  </section>
);

export default Hero;
