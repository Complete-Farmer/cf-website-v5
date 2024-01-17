// import { useGlobalContext } from "context/GlobalContext";
import Fade from "react-reveal/Fade";

import GrowerHeroRight from "@assets/images/products/buyer/hero-right.webp";

import HeroRight from "@components/utils/HeroRight";

const Hero = () => {
  // const { setSignUpModal } = useGlobalContext();

  const redirectToDemoScreen = () => {
    // navigate("/product?tab=" + currentTab.href);
  };

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
            <div className="flex justify-center">
              <button
                onClick={() => {
                  // setSignUpModal(true);
                  handleButtonClick();
                }}
                className="flex justify-center items-center w-full md:w-full lg:w-full h-16 gap-2 px-8 py-4 rounded-full bg-buyer-500"
              >
                <p className="text-lg sm:text-xl md:text-xl leading-6 font-bold text-left">
                  Source crops the better way
                </p>
              </button>
            </div>
            <div className="flex justify-center">
              <button
                onClick={() => {
                  redirectToDemoScreen();
                  handleButtonClick();
                }}
                className="flex justify-center items-center w-full md:w-full lg:w-full h-16 gap-2 px-8 py-4 rounded-full border-2 border-blue border-buyer-500}"
              >
                <p className="text-lg md:text-xl leading-6 font-bold text-left text-buyer-500">
                  See a demo
                </p>
              </button>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );

  return (
    <section className="overflow-hidden w-full xl:min-h-[95vh] px-2 md:px-10 md:pr-0 lg:px-10 text-white pb-20 sm:pb-48 xl:pb-32 bg-cover bg-hero-buyer">
      <div className="w-full h-auto pt-14 sm:pt-20 xl:pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-0 lg:px-4 xl:px-0 flex items-center md:flex-row flex-col h-full">
          <LeftComp />
          <HeroRight key="Existing Farmer" imageSrc={GrowerHeroRight.src} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
