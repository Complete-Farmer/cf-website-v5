import { classNames } from "@utils/functions";

import HeroRight from "./HeroRight";
import HeroLeft from "./HeroLeft";

interface IProps {
  url: string;
  title: string;
  isBuyer?: boolean;
  thumbnail: string;
  description: string;
}

const Hero = (props: IProps) => (
  <section
    className={classNames(
      props.isBuyer ? "bg-hero-buyer" : "bg-grower-400",
      "w-full px-6 sm:px-10 text-white pb-20 md:pb-24 2xl:pb-32 bg-cover"
    )}
  >
    <div className="w-full h-auto pt-14 sm:pt-20 xl:pt-32">
      <div className="max-w-7xl mx-auto sm:px-4 xl:px-0 flex items-center xl:flex-row flex-col h-full space-y-6 lg:space-y-8 2xl:space-y-0">
        <HeroLeft title={props.title} description={props.description} />
        <HeroRight
          url={props.url}
          thumbnail={props.thumbnail}
          isBuyer={props.isBuyer || false}
        />
      </div>
    </div>
  </section>
);

export default Hero;
