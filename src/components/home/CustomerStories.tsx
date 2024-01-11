import "swiper/css";
import "swiper/css/navigation";
import "@assets/styles/swiper.css";

import { useMemo, useState } from "react";
import { Navigation } from "swiper/modules";
import type { Query, PrismicDocument } from "@prismicio/client";
import { Swiper, SwiperSlide } from "swiper/react";

import { ArrowIcon } from "@assets/icons";
import Tab from "@components/utils/Tab";
import CustomerStoryCard from "@components/utils/CustomerStoryCard";

const mockCateogries = [
  {
    name: "Grower",
    slug: "grower",
    current: true,
  },
  {
    name: "Buyer",
    slug: "buyer",
    current: false,
  },
];

interface IProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: Query<PrismicDocument<Record<string, any>, string, string>>;
}

interface IItem {
  id: string;
  name: string;
  imageUrl: string;
  titleFirstName: string;
  titleLastName?: string | undefined;
  titleTextColor: string;
}

export default function CustomerStories({ data }: IProps) {
  const [categories, setCategories] = useState(mockCateogries);
  const [activeCategory, setActiveCategory] = useState("Grower");

  const activeMainBgColor =
    activeCategory === "Grower" ? "bg-grower-900" : "bg-buyer-900";
  const activeBgPattern =
    activeCategory === "Grower"
      ? "bg-customer-stories-grower-bg-pattern"
      : "bg-customer-stories-buyer-bg-pattern";
  const inActiveBgColor =
    activeCategory === "Grower" ? "bg-grower-400" : "bg-[#18274C]";
  const normalBgColor =
    activeCategory === "Grower" ? "bg-grower-400" : "bg-[#18274C]";
  const activeBgColor =
    activeCategory === "Grower" ? "bg-grower-500" : "bg-buyer-500";

  const [buyerData, growerData] = useMemo(() => {
    const buyerData: IItem[] = [];
    const growerData: IItem[] = [];

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
        if (item.data.category === "Grower") {
          growerData.push(transformedItem);
        } else {
          buyerData.push(transformedItem);
        }
      });

    return [buyerData, growerData];
  }, [data]);

  const changeCategory = (i: number) => {
    const catIndex = i === 0 ? "Grower" : "Buyer";
    mockCateogries.filter((c) => {
      if (c.name === catIndex) c.current = true;
      if (c.name !== catIndex) c.current = false;
      return c;
    });
    const activeCat = mockCateogries.find((i) => i.name === catIndex);
    setCategories(mockCateogries);
    setActiveCategory(activeCat?.name as string);
  };

  const handleNavigate = () => {
    // navigate("/customer-stories");
  };

  const handleButtonClick = () => {
    // ReactGA.event({
    //   category: "Button Click",
    //   action: "Customer Stories"
    // });
    // window.metapixelfunction("stories", "customer_stories", {});
    // window.dataLayer.push({
    //   event: "customer_stories"
    // });
  };

  return (
    <section
      className={`relative h-full py-14 pb-16 sm:py-20 xl:py-32 sm:pb-40 bg-cover ${activeBgPattern} ${activeMainBgColor}`}
    >
      <div className="flex relative py-4 mb-5 flex-col z-20 px-10 justify-center items-center text-center tracking-normal leading-6 sm:text-center text-white box-border">
        <h2 className="text-center mb-4 font-sans text-white text-[28px] sm:text-5xl font-bold sm:font-semibold tracking-normal leading-none md:mb-12 lg:mb-4">
          Customer Stories
        </h2>
        <Tab
          categories={categories}
          changeCategory={changeCategory}
          activeBgColor={activeBgColor}
          inActiveBgColor={inActiveBgColor}
          normalBgColor={normalBgColor}
        />
      </div>
      <>
        {activeCategory === "Grower" ? (
          <Swiper
            rewind
            navigation
            centeredSlides
            initialSlide={0}
            spaceBetween={20}
            className="mySwiper"
            slidesPerView={1.2}
            modules={[Navigation]}
          >
            {growerData.map((item) => (
              <SwiperSlide key={item.id}>
                <CustomerStoryCard data={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <Swiper
            rewind
            navigation
            centeredSlides
            initialSlide={0}
            spaceBetween={20}
            slidesPerView={1.2}
            className="mySwiper"
            modules={[Navigation]}
          >
            {buyerData.map((item) => (
              <SwiperSlide key={item.id}>
                <CustomerStoryCard type="buyer" data={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </>
      <div
        onClick={() => {
          handleButtonClick();
        }}
        className="text-[20px] flex items-center justify-center px-6 mt-14 sm:mt-16"
      >
        <button
          type="submit"
          onClick={handleNavigate}
          className={`${activeBgColor} space-x-2 w-full flex items-center justify-center h-16 px-6 sm:mx-40 lg:mx-0 lg:w-[250px] lg:text-[20px] font-medium lg:font-bold tracking-wide text-white transition duration-200 rounded-full focus:shadow-outline focus:outline-none`}
        >
          <span>See all stories</span>
          <ArrowIcon className="text-white" />
        </button>
      </div>
    </section>
  );
}
