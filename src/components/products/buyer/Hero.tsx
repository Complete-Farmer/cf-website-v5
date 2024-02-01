import Fade from "react-reveal/Fade";

import { Button, HeroRight } from "@components/utils";

import GrowerHeroRight from "@assets/images/products/buyer/hero-right.webp";

const Hero = () => {

  const handleButtonClick = () => {
    // ReactGA.event({
    //   category: "Button Click",
    //   action: "Source Crop"
    // });
    // window.metapixelfunction("crop", "source_crop", {});
    // window.dataLayer.push({
    //   event: "source_crop"
    // });
  };

  const LeftComp = () => (
    <div className="w-full md:w-1/2 h-full flex flex-col xl:pr-0 lg:pr-5 items-center md:items-start justify-center space-y-10">
      <Fade left duration={1000} delay={500} distance="30px">
        <div className="flex flex-col justify-start items-start gap-11">
          <div className="flex flex-col justify-start items-start gap-2">
            <p className="px-5 md:px-0 md:py-3 text-[28px] md:text-[32px] lg:text-[48px] leading-[34px] md:leading-10 lg:leading-[50px] text-center md:text-left font-bold xl:text-left">
              The one-stop solution for your crop procurement needs&nbsp;
            </p>
            <p className="text-base lg:text-xl lg:leading-7 font-normal md:font-medium mt-5 md:mt-0 text-center md:text-left md:w-[345px] lg:w-[496px] xl:text-left">
              Source quality crops grown to your specifications from our network
              of qualified growers and delivered seamlessly and reliably to you.
              &nbsp;
            </p>
          </div>
          <div className="flex flex-col w-full justify-between xl:justify-start gap-6">
            <Button
              title="Source crops the better way"
              onClick={handleButtonClick}
              className="py-4 text-xl !rounded-full !font-bold !bg-buyer-500"
            />

            <a
              href={"/products?tab=buyer"}
              className="contents"
            >
              <Button
                title="See a demo"
                onClick={handleButtonClick}
                className="py-4 text-xl !rounded-full !text-buyer-500 !font-bold !bg-transparent border-2 border-buyer-500"
              />
            </a>
          </div>
        </div>
      </Fade>
    </div>
  );

  return (
    <section className="overflow-hidden w-full xl:min-h-[70vh] 2xl:min-h-[80vh] px-2 md:px-10 md:pr-0 lg:px-10 text-white pb-20 sm:pb-48 xl:pb-32 bg-cover bg-hero-buyer">
      <div className="w-full h-auto pt-14 sm:pt-20 xl:pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-0 lg:px-4 xl:px-0 flex items-center md:flex-row flex-col h-full">
          <LeftComp />
          <HeroRight key="Existing Farmer" imageSrc={GrowerHeroRight.src} className="hidden sm:flex" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
