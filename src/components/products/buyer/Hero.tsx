import { Button, Fading, HeroRight } from "@components/utils";

import BuyerHeroRight1 from "@assets/images/products/buyer/hero-right.webp";
import BuyerHeroRight2 from "@assets/images/products/buyer/hero-right-tablet.webp";
import { getAppLink } from "@utils/functions";

const Hero = () => {
  const handleButtonClick = () => {
    window.fbq("track", "click", {
      content_category: "Auth Button Clicked",
      content_name: "Redirect to Buyer Signup",
    });
    window.gtag("event", "generate_lead", {
      event_category: "Auth Button Clicked",
      event_label: "Redirect to Buyer Signup",
    });
  };

  const LeftComp = () => (
    <div className="w-full md:w-1/2 h-full flex flex-col xl:pr-0 lg:pr-5 items-center md:items-start justify-center space-y-10">
      <Fading left>
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
            <a target="_blank" href={getAppLink("Signup Buyer")} className="contents" rel="noreferrer">
              <Button
                title="Source crops the better way"
                onClick={handleButtonClick}
                className="py-4 text-xl !rounded-full !font-bold !bg-buyer-500"
              />
            </a>

            <a href="/products?tab=buyer" className="contents">
              <Button
                title="See a demo"
                className="py-4 text-xl !rounded-full !text-buyer-500 !font-bold !bg-transparent border-2 border-buyer-500"
              />
            </a>
          </div>
        </div>
      </Fading>
    </div>
  );

  return (
    <>
      <LeftComp />
      <HeroRight
        key="Existing Farmer"
        images={{
          tablet: BuyerHeroRight2.src,
          desktop: BuyerHeroRight1.src,
        }}
        className="hidden sm:flex"
      />
    </>
  );
};

export default Hero;
