import Fade from "react-reveal/Fade";

interface IProps {
  incentives: {
    name: string;
    imageSrc: ImageMetadata;
    description: string;
    linkText: string;
    link: string;
  }[];
  bgColor: string;
  linkIcon: ImageMetadata;
  textColor: string;
}

export default function SectionList({
  incentives,
  bgColor,
  linkIcon,
  textColor,
}: IProps) {
  const handleLinkClick = () => {
    // ReactGA.event({
    //   category: "Link Click",
    //   action: "Section Link"
    // });
    // window.dataLayer = window.dataLayer || [];
    // window.dataLayer.push({
    //   event: "SectionLinkClick"
    // });
    // ReactPixel.track("Section Link", {});
  };

  return (
    <div className={bgColor}>
      <div className="mx-auto max-w-7xl px-8 py-4 md:py-5 sm:px-2 lg:py-16 lg:px-4">
        <div className="mx-auto max-w-2xl px-4[x] lg:max-w-none">
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-8 lg:grid-cols-3 mb-20">
            {incentives.map((i) => (
              <Fade
                bottom
                delay={500}
                key={i.name}
                duration={1000}
                distance="30px"
              >
                <div className="flex flex-col justify-between">
                  <div key={i.name} className="flex flex-col justify-start">
                    <div className="flex-shrink-0">
                      <img className="w-8 h-8" src={i.imageSrc.src} alt="" />
                    </div>
                    <div className="w-full mt-4 lg:mt-6 lg:w-auto">
                      <h3 className="text-2xl sm:text-[28px] font-bold text-gray-900">
                        {i.name}
                      </h3>
                      <p className="mt-4 text-xs sm:text-base lg:w-[373px] lg:h-20 lg:text-base lg:leading-6 text-[#1D1D1F]">
                        {i.description}
                      </p>
                    </div>
                  </div>
                  <div className="mt-2 flex justify-start flex-grow-0 flex-shrink-0 h-6 sm:mt-6 relative opacity-90 gap-2 lg:gap-4">
                    <a
                      href={i.link}
                      onClick={() => handleLinkClick()}
                      className={`text-base sm:text-[20px] font-bold text-center lg:block ${textColor} hover:cursor-pointer`}
                    >
                      {i.linkText}
                    </a>
                    <img src={linkIcon.src} className="mt-1" />
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
