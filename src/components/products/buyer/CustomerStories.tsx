import "swiper/css";
import "swiper/css/navigation";
import "@assets/styles/swiper.css";

import { useMemo } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { Button, CustomerStoryCard, HeadingOneLine } from "@components/utils";

import type { IPrismicData } from "types/app";

interface IProps {
  data: IPrismicData;
}

interface IItem {
  id: string;
  name: string;
  imageUrl: string;
  titleFirstName: string;
  titleTextColor: string;
  titleLastName?: string | undefined;
}

const CustomerStories = ({ data }: IProps) => {
  const cxs = useMemo(() => {
    const buyerData: IItem[] = [];

    data.results
      .filter((item) => item?.data?.description.length > 0)
      .forEach((item) => {
        const transformedItem: IItem = {
          id: item.uid || item.id,
          titleTextColor: "text-white",
          imageUrl: item.data.image.url,
          name: item?.data?.name[0]?.text,
          titleFirstName: item?.data?.description[0]?.text,
        };
        buyerData.push(transformedItem);
      });

    return buyerData;
  }, [data]);

  return (
    <section className="relative bg-buyer-900 bg-customer-stories-buyer-bg-pattern h-full py-6 xl:py-20 px-0 space-y-14">
      <HeadingOneLine
        titleTextColor="text-white"
        title=" Enabling seamless sourcing one buyer at a time."
        desc="CF buyer helps commodity buyers gain control of their procurement process from order to delivery guaranteeing seamless sourcing and reliable fulfillment. See how we’ve helped other buyers like you"
      />

      {cxs?.length > 0 && <Swiper
        rewind
        navigation
        centeredSlides
        initialSlide={0}
        spaceBetween={20}
        slidesPerView={1.2}
        className="mySwiper"
        modules={[Navigation]}
      >
        {cxs.map((item) => (
          <SwiperSlide key={item.id}>
            <CustomerStoryCard type="buyer" data={item} />
          </SwiperSlide>
        ))}
      </Swiper>}

      <Button title="See all stories" hasArrow className="!w-auto mx-auto !rounded-full px-8 py-4 !bg-buyer-500 text-xl" />
    </section>
  );
};

export default CustomerStories;
