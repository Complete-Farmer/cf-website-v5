import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useMemo, useRef, useState } from "react";
import Fade from "react-reveal/Fade";
import Slider from "react-slick";
import type { IPrismicData } from "types/app";
import { Button } from "@components/utils";

interface IProps {
  data?: IPrismicData;
}

const Hero = ({ data }: IProps) => {
  const [currentSliderIndex, setCurrentSliderIndex] = useState(0);
  const sliderRef = useRef(null); 

  const sliders = useMemo(() => {
    return data?.results.map((item) => ({
      ...item,
      id: item.uid,
      title: item?.data?.title[0]?.text,
      imageSrc: item.data.sliderimage.url,
      link: item?.data?.learn_more?.url,
      description: item?.data?.summarytext[0]?.text,
    }));
  }, [data]);

  const settings = {
    dots: true,
    speed: 1000,
    arrows: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    initialSlide: 1,
    centerMode: true,
    slidesToScroll: 1,
    centerPadding: "0px",
    autoplaySpeed: 4000,
    beforeChange: (_, newIndex) => {
      setCurrentSliderIndex(newIndex);
    },
    responsive: [
      {
        breakpoint: 300,
        settings: {
          centerMode: true,
          initialSlide: 1,
          slidesToShow: 1.02,
          centerPadding: "28px",
        },
      },
    ],
  };

  const slideToNext = (index: number) => {
    sliderRef.current.slickGoTo(index);
  };

  const handleButtonClick = () => {
    // ReactGA.event({
    //   category: "Button Click",
    //   action: "Learn More"
    // });
    // window.metapixelfunction("learn", "learn_more_details", {});
    // window.dataLayer.push({
    //   event: "learn_more_details"
    // });
  };

  // const handleLinkClick = () => {
  //   // ReactGA.event({
  //   //   category: "Link Click",
  //   //   action: "Hero Link"
  //   // });
  //   // window.dataLayer = window.dataLayer || [];
  //   // window.dataLayer.push({
  //   //   event: "HeroBottonClickEvent"
  //   // });
  //   // ReactPixel.track("Join Now", {});
  // };

  const LeftComp = ({
    link,
    title,
    description,
  }: {
    link: string;
    title: string;
    description: string;
  }) => (
    <div className="w-full md:w-1/2 h-full flex flex-col items-center md:items-start justify-center space-y-10">
      <Fade left duration={1000} delay={500} distance="30px">
        <div className="space-y-24">
          <div className="flex flex-col justify-start items-start gap-11 sm:gap-8">
            <div className="flex flex-col justify-start items-start gap-2">
              <h1 className="line-clamp-2 text-[28px] pt-8 px-6 lg:px-0 leading-9 text-left font-bold md:-mt-20 md:text-[32px] md:leading-10 lg:-mt-0 lg:text-6xl lg:leading-[80px] text-grower-900">
                {title}
              </h1>
              <p className="lg:text-2xl px-6 lg:px-0 font-normal mt-5 text-left text-base lg:leading-9 xl:text-left text-custom_black-900 line-clamp-4">
                {description}
              </p>
            </div>
            <div className="flex justify-left">
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="contents"
              >
                <Button
                  hasArrow
                  title="Learn more"
                  onClick={handleButtonClick}
                  className="py-4 px-6 text-xl !rounded-full !w-fit !font-bold"
                />
              </a>
            </div>
          </div>
          <div className="hidden lg:flex flex-row justify-start items-start gap-7">
            {sliders?.map((_, index) => {
              if (index === currentSliderIndex) {
                return (
                  <div
                    key={index}
                    className="rounded-full h-3 w-3 bg-grower-500"
                    onClick={() => {
                      setCurrentSliderIndex(index);
                      slideToNext(index);
                    }}
                  />
                );
              } else {
                return (
                  <div
                    key={index}
                    className="rounded-full h-3 w-3 border border-grower-500"
                    onClick={() => {
                      setCurrentSliderIndex(index);
                      slideToNext(index);

                    }}
                  />
                );
              }
            })}
          </div>
        </div>
      </Fade>
    </div>
  );


  const RightComp = ({ imageSrc }: { imageSrc: string; }) => (
    <div className="pt-6 sm:pt-0 lg:mr-16">
      <Fade right duration={1000} delay={500} distance="30px">
        <img
          className="w-[100%] h-[200px] md:w-72 md:h-72 lg:w-[445px] lg:h-[445px] rounded-md shadow-md object-cover"
          src={imageSrc}
          alt=""
        />
      </Fade>
    </div>
  );

  return (
    <section
      className="w-full investor-relation-slider px-6 sm:px-8 lg:px-0 pb-20 sm:pb-12 lg:py-28 bg-about-us-hero bg-cover bg-custom_orange-200"
    >
      <Slider {...settings} ref={sliderRef}>
        {sliders?.map((dataItem) => (
          <div
            key={dataItem.title}
            className="w-full h-auto"
          >
            <div className="max-w-7xl mx-auto sm:px-4 xl:px-0 flex sm:items-start sm:justify-between flex-col-reverse md:flex-row h-full">
              <LeftComp
                link=""
                title={dataItem.title}
                description={dataItem.description}
              />
              <RightComp imageSrc={dataItem.imageSrc} />
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Hero;
