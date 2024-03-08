import SmallFarmer from "@assets/images/products/grower/smallholder-farmer.webp";
import Leaves from "@assets/images/products/grower/smallholder-leaves.webp";

import { Button, Fading } from "@components/utils";

const SmallFarmerImpact = () => {
  return (
    <div className="mx-auto max-w-7xl flex flex-col-reverse gap-x-8 sm:flex-row p-6 py-16">
      <div className="sm:flex sm:flex-col relative w-full sm:w-1/2 text-left pt-16 lg:pb-16">
        <Fading left>
          <h2 className="flex items-center mb-3 sm:mb-4 lg:mb-12 text-[28px] lg:text-5xl font-bold text-grower-400">
            Smallholder farmer impact
          </h2>

          <p className="w-full lg:w-5/6 text-base sm:text-base md:text-base lg:text-xl text-custom_black-900 leading-6 sm:leading-6 md:leading-6 lg:leading-[32px] py-2 mb-4">
            We are leading the way by empowering smallholder farmers with the
            resources and technology for sustainable food security. Learn more
            about how we work with smallholder farmers to protect the
            environment, drive increased yield and enable shared prosperity.
          </p>

          <a href="/products/grower/customer-stories" className="contents">
            <Button
              hasArrow
              title="Learn more"
              className="md:!w-fit px-8 py-4 !rounded-full"
            />
          </a>
        </Fading>
      </div>

      <div className="relative m-auto w-full sm:w-1/2 sm:rounded-none">
        <Fading right>
          <img src={SmallFarmer.src} alt="Small Farmer Impact" className="m-auto" />
          <div className="-z-10 absolute top-10 -right-1/3 lg:top-2 lg:-right-1/4 w-[70vw] sm:w-[40vw] lg:w-[85%]">
            <img src={Leaves.src} alt="Small Farmer Impact" className="m-auto" />
          </div>
        </Fading>
      </div>
    </div>
  );
};

export default SmallFarmerImpact;
