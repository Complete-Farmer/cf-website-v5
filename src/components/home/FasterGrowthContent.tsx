import Fade from "react-reveal/Fade";
import Leaves from "@assets/images/home/leaves";
import { ArrowIcon } from "@assets/icons";

interface IProps {
  title: string;
  buttonText: string;
  img: ImageMetadata;
  description: string;
  buttonLink?: () => void;
  type?: string;
}

export default function FasterGrowthContent({
  img,
  type = "grower",
  title,
  buttonText,
  buttonLink,
  description,
}: IProps) {
  const handleButtonClick = () => {
    // ReactGA.event({
    //   category: "Button Click",
    //   action: "Faster Growth"
    // });
    // window.metapixelfunction("faster grower", "faster_grower", {});
    // window.dataLayer.push({
    //   event: "faster_grower"
    // });
  };

  return (
    <div className="mx-auto max-w-7xl flex flex-col-reverse gap-x-4 sm:flex-row p-6 md:py-10 lg:py-16 ">
      <Fade left duration={1000} delay={500} distance="30px">
        <div className="sm:flex sm:flex-col relative w-full sm:w-1/2 text-left py-6">
          <h2
            className={`flex items-center mb-3 sm:mb-4 lg:mb-12 text-[28px] lg:text-5xl font-bold text-${type}-500`}
          >
            <span className="">{title}</span>
          </h2>

          <p className="text-base sm:text-base md:text-base lg:text-2xl leading-6 sm:leading-6 md:leading-6 lg:leading-9">
            {description}
          </p>

          <div className="py-6">
            <button
              type="submit"
              onClick={() => {
                buttonLink?.();
                handleButtonClick();
              }}
              className={`bg-${type}-500 ${type === "buyer" ? "w-full lg:w-auto": ""} flex items-center justify-center text-xl h-16 px-5 lg:mr-6 font-bold tracking-normal text-white transition duration-200 rounded-full focus:shadow-outline focus:outline-none`}
            >
              {buttonText} 
              <ArrowIcon className="hidden lg:block ml-3" />
            </button>
          </div>
        </div>
      </Fade>

      <Fade right duration={1000} delay={500} distance="30px">
        <div className="relative items-center sm:w-1/2 justify-center m-auto sm:rounded-none">
          <img src={img.src} alt="farmer" className="m-auto w-[327px] h-[225px] lg:w-auto lg:h-auto" />

          <div className="-z-10 absolute -top-7 -right-1/3 lg:-top-14 lg:-right-1/4">
            <Leaves className={`text-${type}-100 w-[274px] h-[280px] lg:w-auto lg:h-auto`} />
          </div>
        </div>
      </Fade>
    </div>
  );
}
