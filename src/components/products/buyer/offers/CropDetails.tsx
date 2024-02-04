import "swiper/css";
import "swiper/css/navigation";
import "@assets/styles/swiper.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import { Tooltip } from "react-tooltip";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperButton from "./SwiperButton";
import { Button } from "@components/utils";
import { DownloadIcon } from "@assets/icons";

import type { IAvailableCropOffers } from "types/app";

interface IProps {
  offer: IAvailableCropOffers;
}

const CropDetails = ({ offer }: IProps) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    initialSlide: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1.02,
          centerMode: true,
          centerPadding: "28px",
          initialSlide: 1,
        },
      },
    ],
  };

  const images = () => {
    return [
      {
        source: offer.specification.variety.imageUrl,
        name: offer.specification.variety.name,
      },
      { source: offer.crop.category.imageUrl, name: offer.crop.category.title },
      { source: offer.crop.imageUrl, name: offer.crop.name },
    ];
  };

  return (
    <div className="mx-auto max-w-7xl pb-0 xl:max-w-7xl xl:px-8 ">
      <div className="xl:grid xl:grid-cols-2 xl:items-start xl:gap-x-10">
        <div className="mx-auto mt-6 hidden w-full rounded-md max-w-2xl xl:block xl:max-w-none">
          <Swiper
            rewind
            centeredSlides
            spaceBetween={0}
            initialSlide={0}
            slidesPerView={1}
            modules={[Navigation]}
            className="mySwiper rounded-xl"
          >
            {images().map(({ source, name }) => (
              <SwiperSlide key={name}>
                <img
                  src={source}
                  alt={name}
                  className="h-[615px] w-full object-cover object-center"
                />
              </SwiperSlide>
            ))}

            <SwiperButton direction="left" />
            <SwiperButton direction="right" />
          </Swiper>
        </div>
        <div className="xl:hidden mb-4 order-slider overflow-hidden">
          <Slider {...settings}>
            {images().map(({ name, source }) => (
              <div key={name}>
                <img
                  src={source}
                  alt={name}
                  className="w-[100vw] h-[200px] sm:h-[400px] object-cover object-center"
                />
              </div>
            ))}
          </Slider>
        </div>
        <div className="px-4 sm:mt-10 sm:px-8 xl:px-0 xl:mt-5 overflow-hidden space-y-4">
          <div className="">
            <h1 className="text-[32px] leading-[40px] font-bold tracking-tight text-gray-900">
              {offer.crop.name}
            </h1>

            <div className="text-base leading-6">
              <p className="text-md sm:text-base tracking-tight text-custom_gray-300 font-cera">
                Variety: {offer.specification.variety.name}
              </p>
            </div>
          </div>

          <div className="">
            <h2 className="sr-only">Product price</h2>
            <p className="text-xl font-bold tracking-tight text-gray-900 font-cera">
              USD {offer.price["USD"]}/MT
            </p>
          </div>

          <div className="flex space-x-6 items-end">
            <Button title="Order this crop" className="py-4 !h-fit !bg-buyer-500" />
            
            <div className="pt-4" id="tooltip-buyer-download">
              <button
                className="border border-buyer-500 rounded-md px-4 py-4"
              >
                <DownloadIcon className="text-buyer-500" />
              </button>
            </div>
          </div>

          <Tooltip anchorSelect="#tooltip-buyer-download" place="top" content="Download specifications" />

          <div className="px-0 sm:px-0 lg:mt-5 py-4">
            <div className="relative overflow-hidden rounded-lg sm:border border-[#e6e6e6] py-6 sm:px-4">
              <h3 className="text-sm font-bold text-left text-custom_gray-300">CROP DETAILS</h3>
              <ul className="list-disc px-7 py-4 space-y-4 text-base leading-6">
                {offer.details.map((detail) => {
                  return <li key={detail} className="text-base text-left text-custom_black-900">{detail}</li>;
                })}
              </ul>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default CropDetails;
