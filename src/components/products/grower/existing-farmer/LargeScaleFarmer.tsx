import Fade from "react-reveal/Fade";

import Image from "@assets/images/products/grower/large-scale-farmer.webp";
import Leaves from "@assets/images/products/grower/exisiting-leaves.webp";

const LargeScaleFarmer = () => {
  return (
    <div className="max-w-7xl w-full mx-auto">
      <div className="mx-auto max-w-7xl flex flex-col-reverse gap-x-10 sm:flex-row px-6 md:py-10 lg:py-16">
        <Fade left duration={1000} delay={500} distance="30px">
          <div className="sm:flex sm:flex-col relative w-full sm:w-1/2 text-left py-6">
            <div>
              <h2 className="flex items-center mb-3 sm:mb-4 text-[28px] lg:text-5xl font-bold text-grower-500">
                For large-scale farmers
              </h2>
              <div className="h-2 w-28 bg-grower-500 rounded-full" />
            </div>

            <span className="flex flex-col justify-center text-base sm:text-base md:text-base lg:text-2xl text-custom_black-900 leading-6 sm:leading-6 md:leading-6 lg:leading-9 py-6">
              We offer a robust solution for commercial farmers like you which
              includes providing access to quality inputs and mechanization,
              production and post-harvest services, and access to global buyers.
            </span>
          </div>
        </Fade>

        <Fade right duration={1000} delay={500} distance="30px">
          <div className="relative items-center  justify-center m-auto w-full sm:w-1/2 sm:rounded-none py-8">
            <img src={Image.src} alt="farmer" className="m-auto" />
            <div className="-z-10 absolute top-1/2 -right-1/2 -translate-y-1/2 w-[70vw] sm:w-[40vw] lg:w-[85%]">
              <img src={Leaves.src} alt="farmer" className="m-auto" />
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default LargeScaleFarmer;
