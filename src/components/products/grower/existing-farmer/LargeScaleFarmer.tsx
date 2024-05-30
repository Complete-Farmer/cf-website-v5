import { Fading } from "@components/utils";

// import Image from "@assets/images/products/grower/large-scale-farmer.webp";
import Image from "@assets/images/products/grower/large-scale-farmer.jpg";
import Leaves from "@assets/images/products/grower/exisiting-leaves.webp";

const LargeScaleFarmer = () => {
  return (
    <div className="max-w-7xl w-full mx-auto">
      <div className="mx-auto max-w-7xl flex flex-col-reverse gap-x-10 sm:flex-row px-6 md:py-10 lg:py-16">
        <div className="sm:flex sm:flex-col relative w-full sm:w-1/2 text-left py-6">
          <Fading left>
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
          </Fading>
        </div>

        <div className="relative m-auto w-full sm:w-1/2 sm:rounded-none py-8">
          <Fading right>
            <img src={Image.src} alt="farmer" className="m-auto" />
            <div className="-z-10 absolute -top-7 -right-1/3 lg:-top-10 lg:-right-1/4 w-[70vw] sm:w-[40vw] lg:w-[85%]">
              <img src={Leaves.src} alt="farmer" className="m-auto" />
            </div>
          </Fading>
        </div>
      </div>
    </div>
  );
};

export default LargeScaleFarmer;
