import { ReactTyped } from "react-typed";

import { Fading } from "@components/utils";
import HomeHeroRight from "@assets/images/home/hero-right.webp";

const InitialHero = () => {
  const handleButtonClick = () => {
    window.fbq("track", "see_demo", {
      content_category: "See Demo",
      content_name: "See Demo",
    });
    window.gtag("event", "see_demo", {
      event_category: "See Demo",
      event_label: "See Demo",
    });
  };
  return (
    <section className="w-full lg:min-h-[95vh] px-6 sm:px-10 text-white pb-16 sm:pb-40 lg:pb-32 bg-cover bg-hero-grower">
      <div className="w-full h-auto pt-20 sm:pt-32">
        <div className="max-w-7xl mx-auto sm:px-4 xl:px-0 flex items-center lg:flex-row flex-col h-full">
          <div className="w-full lg:w-1/2">
            <Fading left>
              <div className="max-w-lg[x] mx-auto[x] text-center lg:text-left">
                <h1 className="w-full text-[28px] sm:text-5xl lg:text-[56px] font-bold text-center lg:text-left leading-8 sm:leading-[64px] lg:leading-[70px] sm:px-6 lg:px-0">
                Digitizing <br className="hidden lg:block" /> agriculture
                &mdash; <br className="hidden sm:block lg:hidden" /> From supply
                to demand
                </h1>
                <p className="mt-5 sm:mt-10 w-full text-base sm:text-[32px] text-center lg:text-left lg:pr-5[x] sm:leading-[44px]">
                Complete Farmer connects food growers and global buyers to{" "}
                  <ReactTyped
                    className="font-bold text-green-500"
                    strings={[
                      "competitive markets",
                      "resources",
                      "data",
                      "capital",
                      "each other",
                    ]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop
                  />
                  <br className="" />
                on a single platform
                </p>

                <div className="flex flex-col items-start justify-start sm:gap-4 md:flex-row md:gap-8 mt-10 sm:mt-14 sm:justify-center lg:justify-start">
                  <div className="flex justify-center w-full md:w-auto">
                    <a
                      href="/product"
                      className={
                        "flex justify-center items-center w-full sm:w-[296px] lg:w-auto lg:h-auto gap-2 px-12 sm:px-[79px] lg:px-8 sm:py-4 py-5 rounded-full z-20 bg-grower-500 font-bold text-white"
                      }
                    >
                    View products
                    </a>
                  </div>
                  <div className="flex justify-center w-full mt-4 md:w-auto md:mt-0">
                    <a
                      href="/product"
                      onClick={() => handleButtonClick()}
                      className="flex justify-center items-center w-full sm:w-[296px] lg:w-auto lg:h-auto[x] gap-2 px-12 sm:px-[79px] sm:py-4 lg:px-16 lg:py-5[x] py-5 rounded-full z-20 text-grower-900 bg-white font-bold"
                    >
                    See demo
                    </a>
                  </div>
                </div>
              </div>
            </Fading>
          </div>
          <div className="hidden lg:block w-full lg:w-1/2 lg:mt-0">
            <Fading right>
              <img src={HomeHeroRight.src} alt="hero-right-image" className="xl:w-[522px] xl:h-[589px]" />
            </Fading>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InitialHero;
