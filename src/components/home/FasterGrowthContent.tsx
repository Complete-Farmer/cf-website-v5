import React from "react";
import Fade from "react-reveal/Fade";

interface IProps {
  title: string;
  descriptionLast: string;
  buttonText: string;
  buttonBgColor: string;
  titleBgColor: string;
  buttonLink?: () => void;
  img: ImageMetadata;
  color: string;
}

export default function FasterGrowthContent({ title, descriptionLast, buttonText, buttonBgColor, titleBgColor, buttonLink, img, color }: IProps) {
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
    <div className="mx-auto max-w-7xl flex flex-col-reverse gap-x-4  sm:flex-row  p-6 md:py-10 lg:py-16 ">
      {/* Left Side */}
      <Fade left duration={1000} delay={500} distance="30px">
        <div className="sm:flex sm:flex-col relative w-full sm:w-1/2 text-left py-6">
          <h2 className={`flex items-center mb-3 sm:mb-4 lg:mb-12 text-[28px] lg:text-5xl font-bold ${titleBgColor}`}>
            <span className="">{title}</span>
          </h2>

          <span
            className={
              "flex flex-col justify-center text-base sm:text-base md:text-base lg:text-2xl text-custom_black-900 leading-6 sm:leading-6 md:leading-6 lg:leading-9 py-2"
            }
          >
            {descriptionLast}
          </span>

          <div className="flex items-center justify-start py-6">
            <button
              type="submit"
              onClick={() => {
                buttonLink?.();
                handleButtonClick();
              }}
              className={`${buttonBgColor} flex items-center justify-center text-xl h-16 px-5 lg:mr-6 font-bold tracking-normal text-white transition duration-200 rounded-full focus:shadow-outline focus:outline-none`}
            >
              {buttonText} <span className="hidden lg:block ml-3">&rarr;</span>
            </button>
          </div>
        </div>
      </Fade>

      {/* Right Side */}
      <Fade right duration={1000} delay={500} distance="30px">
        <div className="relative items-center sm:w-1/2 justify-center m-auto sm:rounded-none">
          <img src={img.src} alt="farmer" className="m-auto" />
          <div className="-z-10 absolute top-1/2 -right-1/4 -translate-y-1/2 w-[70vw] sm:w-[40vw] lg:w-[85%]">
            <svg viewBox="0 0 524 536" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M75.7563 535.822H379.457H524C524 423.186 432.689 332.004 320.192 332.004H262.133H193.08H0.132812V535.822H75.7563Z"
                fill={color}
              />
              <path d="M203.808 297.412V203.817C203.808 91.1814 112.497 0 0 0V93.595C0 206.097 91.3114 297.412 203.808 297.412Z" fill={color} />
              <path
                d="M434.165 5.63928V99.2343C434.165 211.87 342.854 303.052 230.357 303.052V209.457C230.357 96.9548 321.535 5.63928 434.165 5.63928Z"
                fill={color}
              />
            </svg>
          </div>
        </div>
      </Fade>
    </div>
  );
}
