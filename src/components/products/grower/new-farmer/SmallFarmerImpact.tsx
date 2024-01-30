import Fade from "react-reveal/Fade";

import SmallFarmer from "@assets/images/products/grower/smallholder-farmer.webp";
import Leaves from "@assets/images/products/grower/smallholder-leaves.webp";

import { ArrowIcon } from "@assets/icons";

const SmallFarmerImpact = () => {
  return (
    <div className="mx-auto max-w-7xl flex flex-col-reverse gap-x-8 sm:flex-row p-6 py-16 overflow-hidden">
      <Fade left duration={1000} delay={500} distance="30px">
        <div className="sm:flex sm:flex-col relative w-full sm:w-1/2 text-left pt-16 lg:pb-16">
          <h2 className="flex items-center mb-3 sm:mb-4 lg:mb-12 text-[28px] lg:text-5xl font-bold text-grower-400">
              Smallholder farmer impact
          </h2>

          <p className="w-full lg:w-5/6 text-base sm:text-base md:text-base lg:text-xl text-custom_black-900 leading-6 sm:leading-6 md:leading-6 lg:leading-[32px] py-2">
              We are leading the way by empowering smallholder farmers with the
              resources and technology for sustainable food security. Learn more
              about how we work with smallholder farmers to protect the
              environment, drive increased yield and enable shared prosperity.
          </p>

          <div className="flex items-center justify-start py-6">
            <a
              href="/products/grower/customer-stories"
              className="bg-grower-500 flex items-center justify-center text-xl h-16 px-8 space-x-3 font-bold tracking-wide text-white transition duration-200 rounded-full focus:shadow-outline focus:outline-none"
            >
              <span>Learn more</span>
              <ArrowIcon />
            </a>
          </div>
        </div>
      </Fade>

      <Fade right duration={1000} delay={500} distance="30px">
        <div className="relative items-center  justify-center m-auto w-full sm:w-1/2 sm:rounded-none">
          <img src={SmallFarmer.src} alt="farmer" className="m-auto" />
          <div className="-z-10 absolute top-[60%] -right-1/4 -translate-y-1/2 w-[70vw] sm:w-[40vw] lg:w-[85%]">
            <img src={Leaves.src} alt="farmer" className="m-auto" />
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default SmallFarmerImpact;
