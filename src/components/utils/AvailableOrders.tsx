import "swiper/css";
import "swiper/css/navigation";
import "@assets/styles/swiper.css";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { AvailableCropCard } from "@components/products/grower";

import HeadingOneLine from "./HeadingOneLine";
import type { IAvailableCrops, IAvailableDemands } from "types/app";

interface IProps {
  data: IAvailableCrops[] | IAvailableDemands[];
  title: string;
  bgColor: string;
  titleTextColor: string;
  cardType: "grower" | "buyer";
}

const AvailableOrders = ({
  data,
  title,
  bgColor,
  // cardType,
  titleTextColor,
}: IProps) => {
  return (
    <div className={`pt-20 pb-20 ${bgColor} `}>
      <div className="pb-6">
        <HeadingOneLine title={title} titleTextColor={titleTextColor} />
      </div>
      <div className="mx-auto max-w-7xl px-0 sm:px-0 lg:px-8 sm:pt-10 lg:pt-0">
        <div className="mx-auto lg:max-w-none">
          <section
            aria-labelledby="related-heading"
            className="px-0 sm:px-0 lg:px-4 py-16 lg:py-6 scale-[1] pl-2 lg:pl-0"
          >
            <Swiper
              rewind
              navigation
              initialSlide={2}
              spaceBetween={0}
              slidesPerView={1.2}
              className="avalaible-swiper"
              modules={[Navigation]}
              breakpoints={{
                0: {
                  slidesPerView: 1.1,
                },
                370: {
                  slidesPerView: 1.2,
                },
                440: {
                  slidesPerView: 1.3,
                },
                639: {
                  slidesPerView: 2.1,
                },
                1024: {
                  slidesPerView: 4,
                },
              }}
            >
              {data.map((d) => (
                <SwiperSlide key={d._id}>
                  <div className="mx-2.5">
                    {/* {cardType === "grower" ? ( */}
                    <AvailableCropCard data={d} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AvailableOrders;
