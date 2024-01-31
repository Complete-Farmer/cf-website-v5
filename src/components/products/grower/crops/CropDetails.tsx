import "swiper/css";
import "swiper/css/navigation";
import "@assets/styles/swiper.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import type { IAvailableDemands } from "types/app";

import Region from "./Region";
import Seasonality from "./Seasonality";

const Button = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="#6C6C6C"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 19.5L8.25 12l7.5-7.5"
    />
  </svg>
);

const SwiperButton = ({ direction }: { direction: string }) => {
  const swiper = useSwiper();

  if (direction === "left") {
    return (
      <button
        className="absolute top-[48%] left-5 z-[99999] bg-white rounded-full p-5  "
        onClick={() => swiper.slidePrev()}
      >
        <Button />
      </button>
    );
  } else {
    return (
      <button
        className="absolute top-[48%] right-5 z-[99999]  rotate-180 bg-white rounded-full p-5  "
        onClick={() => swiper.slideNext()}
      >
        <Button />
      </button>
    );
  }
};

interface IProps {
  crop: IAvailableDemands;
}

const CropDetails = ({ crop }: IProps) => {
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

  const varietiesImages = crop.varieties.map((v) => ({
    source: v.imageUrl,
    name: v.name,
  }));

  const images = () => {
    return [
      { source: crop.category.imageUrl, name: crop.category.title },
      { source: crop.imageUrl, name: crop.name },
      ...varietiesImages,
    ];
  };

  return (
    <div className="mx-auto max-w-7xl pb-0 xl:max-w-7xl xl:px-8 ">
      <div className="xl:grid xl:grid-cols-2 xl:items-start xl:gap-x-10">
        <div className="mx-auto mt-6 hidden w-full rounded-md max-w-2xl xl:block xl:max-w-none">
          <Swiper
            className="mySwiper rounded-xl"
            modules={[Navigation]}
            rewind
            spaceBetween={0}
            slidesPerView={1}
            initialSlide={0}
            centeredSlides
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
        <div className="px-4 sm:mt-10 sm:px-8 xl:px-0 xl:mt-5 overflow-hidden">
          <h1 className="text-[32px] leading-[40px] font-bold tracking-tight text-gray-900">
            {crop.name}
          </h1>

          <div className="sm:mt-4 text-base leading-6">
            <p className="text-md sm:text-base font-bold tracking-tight text-custom_gray-300 font-cera">
              Demanded Varieties:{" "}
              {varietiesImages.map((v) => v.name).join(", ")}
            </p>
          </div>

          <div className=" xl:mt-5 py-4 sm:pt-0 sm:pb-4 ">
            <Seasonality data={crop.seasonality} />
            {crop.websiteData?.region && (
              <Region aboutRegion={crop.websiteData.region} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CropDetails;
