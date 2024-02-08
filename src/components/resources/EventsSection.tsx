import "swiper/css";
import "swiper/css/navigation";
import "@assets/styles/swiper.css";

import { useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import type { IEvent } from "types/app";
import { EventCard } from "./events";

import { ChevronIcon } from "@assets/icons";

interface IProps {
  events: IEvent[];
  children?: React.ReactNode;
}

const SlideNextButton = ({
  children,
  isNext,
}: {
  isNext?: boolean;
  children: React.ReactNode;
}) => {
  const swiper = useSwiper();

  return (
    <div
      role="button"
      onClick={() => {
        isNext ? swiper.slideNext() : swiper.slidePrev();
      }}
      className="flex items-center justify-center h-14 w-14 rounded-full text-grower-900 hover:text-white bg-custom_gray-200 hover:bg-grower-500"
    >
      {children}
    </div>
  );
};

const EventsSection = ({ events, children }: IProps) => {
  const [currentSlide, setCurrentSlide] = useState(1);

  return (
    <section className="w-full relative bg-grower-900 py-20">
      {children}

      {events?.length >= 0 && (
        <Swiper
          className="mySwiper"
          rewind
          initialSlide={2}
          centeredSlides
          breakpoints={{
            0: {
              slidesPerView: 1.1,
            },
            370: {
              slidesPerView: 1.1,
            },
            440: {
              slidesPerView: 1.5,
            },
            639: {
              slidesPerView: 2,
            },

            800: {
              slidesPerView: 2,
            },

            1024: {
              slidesPerView: 2.2,
            },
            1370: {
              slidesPerView: 3,
            },
            1880: {
              slidesPerView: 3,
            },
          }}
          onActiveIndexChange={({ activeIndex }) => setCurrentSlide(activeIndex)}
        >
          {events.map((event, index) => (
            <SwiperSlide key={index}>
              <div
                id={"swiper-parent"}
                className="w-auto  ml-2 sm:ml-14 md:ml-9 lg:ml-6"
              >
                <EventCard event={event} isSlider showDetails={currentSlide === index} />
              </div>
            </SwiperSlide>
          ))}
          <div className="hidden mt-14 ml-12 sm:flex space-x-10 justify-center">
            <SlideNextButton>
              <ChevronIcon className="rotate-90" />
            </SlideNextButton>
            <SlideNextButton isNext>
              <ChevronIcon className="-rotate-90" />
            </SlideNextButton>
          </div>
        </Swiper>
      )}
    </section>
  );
};

export default EventsSection;
